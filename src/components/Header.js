import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {  
    const [btnName, setBtnName] = useState("Login");
    useEffect(() => {
        console.log("header rendered useEffect called");
    }, [btnName]);

    // if depency array is not passed, it will render everytime the component is rendered
    // if no dependency is passed, it will render only once
    // if dependency is passed, it will render whenever the dependency changes
    // if [] is passed, it will render only once
    // if [btnName] is passed, it will render whenever the btnName changes
    // if [btnName,searchInput] is passed, it will render whenever the btnName or searchInput changes
    // if [btnName,searchInput,listOfRestaurants] is passed, it will render whenever the btnName or searchInput or listOfRestaurants changes
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link className="link" to="/" >Home</Link></li>
                    <li><Link className="link" to="/about">About Us </Link></li>
                    <li><Link className="link" to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");   
                    }}>{btnName}</button>
                </ul>
                   
            </div>
        </div>
    )
}

export default Header;
