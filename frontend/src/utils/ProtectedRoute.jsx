import { Link } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const ProtectedRoute = ({ children, isAuthenticated, loading }) => {
  
  if (loading) {
    return <Loader />
  } 
  if (!isAuthenticated) {
   return <div  className='d-flex flex-column justify-content-center align-items-center' style={{height:"100vh"}}>
    <h2>Login to Access</h2>
     <Link to={'/login'} className='btn'>Login</Link>
   </div>
  }
  
  return children
};

export default ProtectedRoute;
