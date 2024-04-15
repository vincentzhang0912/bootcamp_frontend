import { Link } from "react-router-dom"
const Navbar = () => {
  return ( 
 <>
   <nav  className="navbar navbar-expand-lg  navbar-dark  "  >
    
    <div className="container-fluid ">
         
      <Link className="navbar-brand  " to="/">
        <img 
        src="imgs/plainLogo.png"
        width="60"
        height="60"
        alt="logo"
      />
      </Link>

        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
    
      <div className="collapse navbar-collapse  " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item mx-3">
          <Link  className="nav-link active  " to="/"><i className="bi bi-house-door  "></i>Home</Link>
          </li>
          <li className="nav-item  mx-3 ">
            <Link  className="nav-link text-reset text-decoration-none" to="About">
              <i className="bi bi-list-task "></i>About Us</Link>
   
          </li>
          <li className="nav-item  mx-3 " >
            <Link  className="nav-link text-reset text-decoration-none" to="Products">
            <i className=" bi bi-brightness-high"></i> Products</Link>

          </li>
          <li className="nav-item mx-3 ">
            <Link  className="nav-link text-reset text-decoration-none "to="Contact">
            <i className=" bi bi-person-lines-fill"></i>Contact Us</Link>
            
          </li> 
        </ul>
    
      <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#myModal">
      
      <i class="bi bi-box-arrow-in-right"></i>
        login
      </button>
      </div>
    </div>
    
  </nav>
  
 </>
)}
 
export default Navbar;