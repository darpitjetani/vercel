import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth, user: null, token: ''
    })
    localStorage.removeItem('auth');
    toast.success("logout successfully");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand">
        <img src={('/image/loogo.jpg')} alt="Brand Logo" style={{ height: '50px', width: '100px'}} />
      </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </li>
              {
                !auth.user ? (<>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
                ) : (
                  <>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{ border: "none" }}
                      >
                        {auth?.user?.role === 1 ? "Admin" : "User"}
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>    
                          <NavLink 
                            to={`/dashboard/${
                              auth?.user?.role === 1 ? "admin" : "user"
                              }`}
                            className="dropdown-item"
                          >
                            Dashboard
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={handleLogout}
                            to="/dashboard"
                            className="dropdown-item"
                          > 
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </>
                )
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
} 

export default Header

