import React, { useContext } from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import noteContext from "../context/notes/noteContext"
// import './Navbar.css'



const Navbar = () => {
    const context = useContext(noteContext);
    const navigate = useNavigate()
    const { onAlert } = context
    let location = useLocation();
    const logout = () => {
        localStorage.removeItem('token')
        onAlert({ msg: "Logged Out", colour: "success" })
        if (localStorage.getItem('token') == undefined) {
            navigate('/login')
        }

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">YourThoughts</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/posts" ? "active" : ""}`} to="/posts">Posts</Link>
                        </li>

                    </ul>

                    {/* <form className="d-flex">  */}
                    {localStorage.getItem('token') != null ? <button class="btn btn-warning mx-1" type="submit" onClick={logout}>Logout</button> : <></>}
                    {localStorage.getItem('token') == null ? <Link className="btn btn-info mx-1" to="/login" role="button">Login</Link> : <></>}
                    {localStorage.getItem('token') == null ? <Link className="btn btn-info mx-1" to="/signup" role="button">Signup</Link> : <></>}
                    {/* <button class="btn btn-primary" type="submit" onClick={logout}>Logout</button> */}

                    {/* </form> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar