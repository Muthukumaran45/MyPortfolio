import React from 'react'


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { HashLink } from "react-router-hash-link";

import Home from './Home';





function Navbar() {
    return (
        <>
            <BrowserRouter>

                <header className='sticky-top'>
                    <nav className="navbar navbar-expand-sm bg-light p-2" data-bs-theme="light">
                        <div className="container-fluid">

                            <div className="navbar-brand me-auto px-3">
                                <Link className="navbar-brand" id='navbar_brand' to='/'>Welcome here... <img src="../assets/portfolio.gif" className='mx-3' width='30px' alt="" /></Link>
                            </div>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav ms-auto">
                                    <ul className="navbar-nav  me-auto mt-2 mb-md-0 px-4">
                                        <li className="nav-item"><HashLink className='nav-link active' to='#Home' style={{ fontFamily: 'Sedan SC, serif' }}>Home</HashLink></li>
                                        <li className="nav-item"><HashLink className='nav-link active' to='#Skills' style={{ fontFamily: 'Sedan SC, serif' }}>Skills</HashLink></li>
                                        <li className="nav-item"><HashLink className='nav-link active' to='#Projects' style={{ fontFamily: 'Sedan SC, serif' }}>Projects</HashLink></li>
                                        <li className="nav-item"><HashLink className='nav-link active' to='#Education' style={{ fontFamily: 'Sedan SC, serif' }}>Education</HashLink></li>
                                        <li className="nav-item"><HashLink className='nav-link active' to='#Contact' style={{ fontFamily: 'Sedan SC, serif' }}>Contact</HashLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </nav>
                </header>


                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default Navbar;
