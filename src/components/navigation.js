import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
export default function Navigation() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <img src={Logo} height={55} width={55} />
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white">Contact Us</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className='btn btn-outline-danger'><Link to="/login" className='nav-link'>Login</Link></button>

                        </form>
                    </div>
                </div>
            </nav>
            <br></br>
        </>
    )
}
