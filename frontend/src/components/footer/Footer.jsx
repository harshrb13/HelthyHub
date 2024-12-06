import { Link } from "react-router-dom"

function Footer({isAuthenticated}) {
  return (
   
    <footer className={`text-center text-lg-start bg-body-tertiary text-muted bg-dark`}>
      
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-secondary">
        
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        
        <div>
          <Link href="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="#" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </Link>
          <Link href="#" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link href="#" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link href="#" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </Link>
        </div>
        
      </section>
     
      <section className="">
        <div className="container text-center text-md-start mt-5">
         
          <div className="row mt-3">
          
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Healthy hub
              </h6>
              <p>
              Elevate your wellness journey with expert guidance and personalized support. Transform your life, one healthy choice at a time.
              </p>
            </div>
            
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
             
              <h6 className="text-uppercase fw-bold mb-4">
                Home
              </h6>
              <p>
                <Link to={'/'} className="text-reset">Services</Link>
              </p>
              <p>
                <Link to={'/'} className="text-reset">About us</Link>
              </p>
            </div>
            
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">
                Blogs
              </h6>
              <p>
                <Link to={'/fitness'} className="text-reset">Fitness & Exercise</Link>
              </p>
              <p>
                <Link href="#!" className="text-reset">Healthy Eating</Link>
              </p>
              <p>
                <Link href="#!" className="text-reset">Mental Well-Being</Link>
              </p>
            </div>
            
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
             
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i>AHEMDABAD, GJ 01, INDIA</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                healthyhub@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i>+ 91 99099 77077</p>
            </div>
            
          </div>
         
        </div>
      </section>
      
      <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        © 2024 Copyright:
        <Link className="text-reset fw-bold" href="https://healthyhub.com/">healthyhub.com</Link>
      </div>
     
    </footer>
    
  )
}

export default Footer