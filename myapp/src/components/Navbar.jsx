import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";


function Navbar() {

    const { currentUser, logoutClick } = useContext(UserContext);

    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Home</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {currentUser !== null ?
                        <>
                            <NavLink className="nav-link" to="/databinding">Data Binding</NavLink>
                            <NavLink className="nav-link" to="/search">Products</NavLink>
                            <NavLink className="nav-link" to="/uncontrolled">UnControlled</NavLink>
                            <NavLink className="nav-link" to="/controlled">Controlled</NavLink>
                            <NavLink className="nav-link" to="/formik">Formik</NavLink>
                            <NavLink className="nav-link" to="/products">Product List</NavLink>
                            <NavLink className="nav-link" to="/search-class">Search(Class)</NavLink>
                            <NavLink className="nav-link" to="/search-redux">Search(Redux)</NavLink>
                            <NavLink className="nav-link" to="/unittest">Unit Test</NavLink>
                            <a className="nav-link" onClick={logoutClick}>Logout | Welcome {currentUser}</a>
                        </>
                        :
                        <>
                            <NavLink className="nav-link" to="/signin">Login</NavLink>
                        </>
                        }
                    </div>
                </div>
            </div>
        </nav>
    </>);
}

export default Navbar;