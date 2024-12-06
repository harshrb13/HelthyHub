import "./header.css"
import logo from '../../assets/logo.png'
import { Link, NavLink, useLocation } from "react-router-dom"
import { MdArrowDropDown } from "react-icons/md";
import profileImg from "../../assets/profile.jpg"
import { CiLogin } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { useEffect, useState } from "react";
import {toast} from "react-toastify"
import Spinner from 'react-bootstrap/Spinner';

function Header({ isAuthenticated, user,loading }) {

  const [home,setHome]=useState(false)
  const [about,setAbout]=useState(false)
  const [service,setService]=useState(false)
  const [blog,setBlog]=useState(false)


  const [profileToggle, setProfileToggle] = useState(false)
  const [nav, setNav] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setNav(false);
    } else {
      setNav(true);
    }
  }, [location.pathname]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className={nav ? "header" : "d-none"} >
      <nav className="navbar navbar-expand-lg py-2 shadow ">
        <div className="container-fluid">
          <img src={logo} className="" height="45px" alt="" />
          <Link className="navbar-brand px-2 " to="/">Healthy<span>Hub</span></Link>
          <button className="nav-icon" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link className={`nav-link mx-lg-3 m-lg-0 m-2 ${home && "active"}`} aria-current="page"onClick={()=>{scrollToSection('home')
                setHome(true); setAbout(false); setService(false); setBlog(false)}
              } to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link mx-lg-3 m-lg-0 m-2 ${service && "active"}`} aria-current="page" onClick={()=>{scrollToSection('services')
                setHome(false); setAbout(false); setService(true); setBlog(false)}
              } to={'/'}>Services</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link mx-lg-3 m-lg-0 m-2 ${about && "active"}`} aria-current="page" onClick={()=>{scrollToSection('about')
                setHome(false); setAbout(true); setService(false); setBlog(false)}
              } to={'/'}>About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className={`nav-link mx-lg-3 m-lg-0 m-2 dropdown-toggle ${blog && "active"}`} to="/blog" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={()=>{setHome(false); setAbout(false); setService(false); setBlog(true)}}
                  >
                  Blog
                </Link>
                <ul className="dropdown-menu p-2">
                  <li><NavLink className="dropdown-item " to="/fitness">Fitness & Exercise</NavLink></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><NavLink onClick={()=>{
                    toast.error("Currently not Available")
                  }} className="dropdown-item" to="#">Healthy Eating</NavLink></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li><NavLink onClick={
                    ()=>{
                      toast.error("Currently not Available")
                    }
                  } className="dropdown-item" to="#">Mental Well-being</NavLink></li>
                </ul>
              </li>
            </ul>
            {
              loading?<div className="d-flex justify-content-center align-items-center mx-5">
                <Spinner animation="border" variant="success" />
              </div>
              :
              isAuthenticated ? <div className={"profile-dropdown"} onClick={() => {
                setProfileToggle(!profileToggle)
              }}>
                <div className="nav-profile-btn d-lg-flex d-none">
                  {user ? <img src={user.avatar.url} alt='' /> : <img src={profileImg} alt='loading..' />}

                  <p className={profileToggle ? 'text-dark' : ''}>{user.name}</p>
                  <MdArrowDropDown className={`drop-btn ${profileToggle ? 'text-dark' : ''}`} />
                </div>
                <div className={`dropdown-section ${profileToggle ? 'd-block' : 'd-lg-none'}`}>
                  <ul>
                    <li>
                      <Link to={'/profile'}><CiUser className="profile-sec-icon" />
                        Profile</Link>
                    </li>
                    <hr className="profile-hr" />
                    <li>
                      <Link to={"/logout"}><CiLogin className="profile-sec-icon" />
                        Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
              :
              <Link to="/login" className="btn mx-2 my-2" type="submit"><i className="fa-solid fa-user pe-2"></i>Login </Link>
              
            }



          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header