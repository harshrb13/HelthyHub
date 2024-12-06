import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home/Home"
import Header from "./components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./utils/ProtectedRoute";
import AuthProtection from "./utils/AuthProtection";
import { userProfile } from "./redux/actions/authAction";
import { useEffect } from "react";
import Forgot from "./components/Forgot/Forgot";
import Reset from "./components/Reset/Reset";
import Fitness from "./pages/Fitness/Fitness";
import Logout from "./pages/Auth/Logout";
import Footer from "./components/footer/Footer";
import Profile from "./pages/Profile/Profile";
import EditInfo from "./pages/Profile/EditInfo";

function App() {
  const { isAuthenticated, user, loading } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userProfile())
  }, [dispatch])


  return (
    <>
      <BrowserRouter>

        <Header isAuthenticated={isAuthenticated} user={user} loading={loading} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fitness" element={
            <ProtectedRoute isAuthenticated={isAuthenticated} loading={loading}>
              < Fitness />
            </ProtectedRoute >
          } />
          <Route path="/forgot" element={
            <AuthProtection loading={loading} isAuthenticated={isAuthenticated} >
              <Forgot />
            </AuthProtection>
          } />
          <Route path="/reset/:token" element={
            <AuthProtection loading={loading} isAuthenticated={isAuthenticated} >
              <Reset />
            </AuthProtection>
          } />
          <Route path="/signup" element={
            <AuthProtection loading={loading} isAuthenticated={isAuthenticated} >
              <Register />
            </AuthProtection>
          } />
          <Route path="/login" element={
            <AuthProtection loading={loading} isAuthenticated={isAuthenticated} >
              <Login />
            </AuthProtection>
          } />
          <Route path="/profile" element={
            <ProtectedRoute isAuthenticated={isAuthenticated} loading={loading}>
              <Profile user={user} />
            </ProtectedRoute >
          } />
          <Route path="/profile/edit" element={
            <ProtectedRoute isAuthenticated={isAuthenticated} loading={loading}>
              <EditInfo/>
            </ProtectedRoute >
          } />
          <Route path="/logout" element={<Logout />} />
        </Routes>

        <Footer isAuthenticated={isAuthenticated} />
      </BrowserRouter>
    </>
  )
}

export default App
