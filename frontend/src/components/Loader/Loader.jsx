import logo from '../../assets/logo.png'
import "./loader.css"
function Loader() {
  return (
    <div className='loader-container'>
        <img src={logo} alt="" />
        <div className="loader">
        </div>
    </div>
  )
}

export default Loader