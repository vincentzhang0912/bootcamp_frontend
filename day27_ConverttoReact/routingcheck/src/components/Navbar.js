import { Link } from "react-router-dom";


const MyNavbar = () => {
    return (
            <nav
                className="navbar navbar-expand-sm navbar-light bg-light"
            >
                <div className="container">
                    <Link className="navbar-brand" to="/">Logo</Link>
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
                    {/* <a href="" will render whole page,but Link just reder a part */}
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/" aria-current="page"
                                    >Home
                                    <span className="visually-hidden">(current)</span></Link>   </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">About</Link>
                            </li>                            
                            <li className="nav-item">
                                <Link className="nav-link" to="contact">Contact</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>


     );
}
 
export default MyNavbar;
