import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import "./auth.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RegImg from "../../assets/img-1.png";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authAction";

const containerVeriance = {
  initial: {
    opacity: 0,
    y: -21,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
};

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(login(loginData.email, loginData.password));
    setLoginData({
      email: "",
      password: "",
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="auth-body">
       <div className="notise">
           <p className="text-danger">
              <b>NOTE:</b> This webiste only for testing purpose no need use
              personal details.{" "}
            </p>
            <p className="text-danger">
                <b>USE:</b> Email : <span className="text-black">user@gmail.com</span> and pass : <span className="text-black">user@123</span>.
              </p>
      </div>
      <div className="auth-container ">
        <Link to={"/"}>
          <div className="auth-close-btn">
            <IoClose />
          </div>
        </Link>

        <AnimatePresence>
          <motion.div
            className="auth-form"
            variants={containerVeriance}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={containerVeriance}>Welcome to Login</motion.h2>
            <motion.form onSubmit={submitForm} variants={containerVeriance}>
              <motion.div className="inputField" variants={containerVeriance}>
                <input
                  placeholder="Email"
                  autoComplete="off"
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={loginData.email}
                  onChange={handleInputChange}
                />
              </motion.div>

              <br />

              <motion.div className="inputField" variants={containerVeriance}>
                <input
                  required
                  placeholder="Password"
                  autoComplete="off"
                  type="text"
                  name="password"
                  id="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                />
              </motion.div>

              <Link to={"/forgot"}>Forgot password?</Link>

              <button type="submit">Login</button>

              <p>
                Don't have an account?{" "}
                <span className="ms-1">
                  <Link to={"/signup"}>Sign Up</Link>
                </span>
              </p>
            </motion.form>
           
          </motion.div>
        </AnimatePresence>
        <div className="auth-picture">
          <img src={RegImg} alt="Registration" /> {/* Add alt attribute */}
        </div>
      </div>
     
    </div>
  );
}

export default Login;
