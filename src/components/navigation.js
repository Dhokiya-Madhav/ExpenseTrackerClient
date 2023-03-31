import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
export default function Navigation() {

    const userName = localStorage.getItem("userName");

    const logoutUser = () => {
        localStorage.clear();
        window.location = "http://localhost:3000/";
    };
    if (userName) {
        var buttons = <form className="d-flex" role="search">
            {userName}
            <button className='btn btn-outline-danger' onClick={logoutUser}>Logout</button>
        </form>;

        var greet = <center>Welcome , {userName}</center>;
    }
    else
    {
        var buttons = <form className="d-flex" role="search">
        <button className='btn btn-outline-danger'><Link to="/login" className='nav-link'>Login</Link></button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className='btn btn-outline-danger'><Link to="/signup" className='nav-link'>Sign up</Link></button>
    </form>;   
    }
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
                                <a className="nav-link text-white" aria-current="page" href="#">Expense Recorder</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-white">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addExp" className="nav-link text-white">Add New Expense</Link>
                            </li>

                            <li className="nav-item">
                                
                            </li>
                            <li className="nav-item">

                            </li>
                        </ul>

                        {buttons}
                        {/* 
                        <form className="d-flex" role="search">
                            <button className='btn btn-outline-danger'><Link to="/login" className='nav-link'>Login</Link></button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button className='btn btn-outline-danger'><Link to="/signup" className='nav-link'>Sign up</Link></button>
                        </form>
                        */}
                    </div>
                </div>
            </nav>
            <br></br>
            {greet}
            <br></br>
        </>
    )
}
