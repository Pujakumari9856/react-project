import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from '../images/logo.jpg';
import { FaAngleDown } from "react-icons/fa";
// 
import { useState } from "react";
import Dropdown from "./Dropdown";
const Navbar=()=>{
    // 
    const[show,setShow]=useState(false);
    function handleShow() {
        setShow(!show);
    }
    return(
        <div className="nav-container">
            <Link to="/">
                <img src={logo} alt="logo" loading="lazy" />
            </Link>
            <nav>
                {/*  */}
                <div className="nav-items" onClick={handleShow}>
                    <div className={`${show?'roundPassport':''}`}>
                    <div className="nav-content">
                        <Link to="/passport" className="navTitle">PASSPORT</Link>
                        <FaAngleDown className="down-icon" />
                    </div>
                    </div>
                    <div className="nav-content">
                        <Link to="/visas" className="navTitle">VISAS</Link>
                        <FaAngleDown className="down-icon" />
                    </div>
                    <div className="nav-content">
                        <Link to="/pancard" className="navTitle">PANCARD</Link>
                        <FaAngleDown className="down-icon" />
                    </div>
                    <div className="nav-content">
                        <Link to="/contact" className="navTitle">CONTACT US</Link>
                        <FaAngleDown className="down-icon" />
                    </div>
                    <div className="nav-content">
                        <Link to="/about" className="navTitle">ABOUT US</Link>
                        <FaAngleDown className="down-icon" />
                    </div>
                    {/*  */}
                    {
                        show &&
                        <Dropdown/>
                    }
                </div>
            </nav>
            <div>
                <Link to="/">
                    <button>JOIN NOW</button>
                </Link>
            </div>
        </div>
    )
}
export default Navbar;