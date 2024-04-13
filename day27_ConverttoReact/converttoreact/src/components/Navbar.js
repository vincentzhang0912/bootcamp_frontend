import { Link } from "react-router-dom"
const Navbar = () => {
  return ( 
 <>
   <nav  className="navbar navbar-expand-lg  navbar-light sticky-top bg-primary"  >
    
    <div className="container-fluid col-md-auto">
         
      <Link className="navbar-brand text-white " to="/">
        <img 
        id="logo"
        src="imgs/logo.png"
        style={{ marginRight: '5px' }}
        alt="logo"
      />HRSWIM
      </Link>

      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
    
      <div className="collapse navbar-collapse text-white d-flex justify-content-start" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item mx-3">
          <Link to="/" className="bi bi-house-door  text-white " >Home</Link>
      
          </li>
          <li className="nav-item  mx-3 ">
            <i className="bi bi-list-task "  role="button"  aria-expanded="false">
            <Link to="About" className="text-reset text-decoration-none">About Us</Link>
            </i>       
          </li>
          <li className="nav-item  mx-3 " role="button"><i className=" bi bi-brightness-high"><Link to="Products" className="text-reset text-decoration-none">Products</Link>
            </i>
          </li>
          <li className="nav-item mx-3  " role="button"><i className=" bi bi-person-lines-fill"><Link to="Contact" className="text-reset text-decoration-none">Contact Me</Link>
            </i>
          </li> 
        </ul>
      </div>
    

      
      <button type="button" className="btn btn-primary position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal1">
        login
      </button>
      
    </div>
    
  </nav>
  
  <div className="modal" tabindex="-1" id="exampleModal1">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Login</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
 </>
)}
 
export default Navbar;