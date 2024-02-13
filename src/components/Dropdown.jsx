import React from "react";
import './Dropdown.css';
import { Link } from "react-router-dom";
const Dropdown=()=>{
    return(
        <div className="dropdown-items">
            <div className="dropdown-subItems">
                <Link className="dropdown-content boldItem">Passport Apply</Link>
                <Link className="dropdown-content">Passport Apply-Normal</Link>
                <Link className="dropdown-content">Passport Apply-Tatkal</Link>
                <Link className="dropdown-content">Check Appointment Availability</Link>
                <Link className="dropdown-content">Track Application Status</Link>
            </div>
            <div className="dropdown-subItems">
                <Link className="dropdown-content boldItem">Online Services</Link>
                <Link className="dropdown-content">Ordinary Passport</Link>
                <Link className="dropdown-content">Diplomatic/Official Passport</Link>
                <Link className="dropdown-content">Police Clearance Certificate</Link>
                <Link className="dropdown-content">Identity Certificate</Link>
                <Link className="dropdown-content">Surrender Certificate</Link>
                <Link className="dropdown-content">LoC Permit</Link>
            </div>
            <div className="dropdown-subItems">
                <Link className="dropdown-content boldItem">Information Corner</Link>
                <Link className="dropdown-content">Fee Calculator</Link>
                <Link className="dropdown-content">Know Your Police Station</Link>
                <Link className="dropdown-content">Locate Passport Seva Kendra</Link>
            </div>
            <div className="dropdown-subItems lastItem">
                <Link className="dropdown-content boldItem">Document Advisort</Link>
                <Link className="dropdown-content">Document Required For fresh Passport</Link>
                <Link className="dropdown-content">Document Required For Re-Issue Of Passport</Link>
                <Link className="dropdown-content">Document Required For PCC and Miscl. services</Link>
                <Link className="dropdown-content">Document Required For Diplomatic/Official Passport</Link>
                <Link className="dropdown-content">Documents required for Background Verification for GEP</Link>
            </div>
        </div>
    )
}
export default Dropdown;