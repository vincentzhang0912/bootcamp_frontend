const Navbar = () => {
  return ( 
    <nav  className="navbar navbar-expand-lg  navbar-light sticky-top bg-primary"  >
    
    <div className="container-fluid col-md-auto">
         
      
      <a className="navbar-brand" href="index.html" />
        <img 
        id="logo"
        src="imgs/logo.png"
        alt="logo"
      />

      
      <a href="index.html">
        <i className="bi bi-house-door navbar-brand text-white " >Home</i>
      </a>

      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>

   
    
      <div className="collapse navbar-collapse text-white d-flex justify-content-start" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

          <li className="nav-item  mx-3 ">
            <i className="bi bi-list-task "  role="button"  aria-expanded="false">
            <a href="about.html" className="text-reset text-decoration-none">About Us</a>
            </i>       
          </li>
          <li className="nav-item  mx-3 " role="button"><i className=" bi bi-brightness-high"><a href="products.html" className="text-reset text-decoration-none">Products</a>
            </i>
          </li>
          <li className="nav-item mx-3  " role="button"><i className=" bi bi-person-lines-fill"><a href="contact.html" className="text-reset text-decoration-none">Contact Me</a>
            </i>
          </li>
          
          
        </ul>
        
        
    
      </div>
    

      
      <button type="button" className="btn btn-primary position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal1">
        login
      </button>
      
    </div>
    
  </nav>
   );
}
 
export default Navbar;