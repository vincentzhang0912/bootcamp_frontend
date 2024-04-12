import {Link} from 'react-router-dom'
const MyNavbar = () => {
  return ( 
    <nav
      className="navbar navbar-expand-sm navbar-light bg-light"
    >
      <div className="container">
        <Link className="navbar-brand" to="#">Navbar</Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="home" aria-current="page"
                >Home
                <span className="visually-hidden">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="about" aria-current="page"
                >About
                <span className="visually-hidden">(current)</span></Link>
            </li>
            
          </ul>
         
        </div>
      </div>
    </nav>
    
   );
}
 
export default MyNavbar;