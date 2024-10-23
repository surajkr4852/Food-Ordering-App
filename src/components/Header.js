import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
    const [signUpButton,setSignUpButton]=useState("Login");
    const onlineStatus=useOnlineStatus();

    const {loggedInUser}=useContext(UserContext);

    //Subscribing to the store using selector
    const cart=useSelector((store)=>store.cart.items);
    console.log(cart)
    return(
        <div className="flex bg-pink-100 justify-between shadow-md m-2 sm:bg-yellow-50">
            <div className="logo-container">
                <img className="w-40 shadow-lg" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 gap-6">
                    <li>Online Status:{onlineStatus?"📶":"🔴"}</li>
                    <li><Link to="/grocery">Grocery Store</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart ({cart.length} items)</Link></li>
                    <button className="login-btn" onClick={()=>{
                        signUpButton==="Login"?setSignUpButton("Logout"):setSignUpButton("Login");
                    }}>{signUpButton}
                    </button>
                    <li className="font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;