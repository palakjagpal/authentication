import { BrowserRouter, Route, Routes, Link} from "react-router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import User_Login from "./User_Login.jsx";
import User_Register from "./User_Register";
import "./Navbar.css";
import { useLocation } from "react-router";

function Navbar(){
    const [token, settoken] = useState(localStorage.getItem("token"));
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        settoken(localStorage.getItem("token"));
    },[location])

    const logout = () => {
        localStorage.removeItem("token");
        settoken(null);
        console.log("Logged Out Successfully");
        navigate("/login");
    }

    return(
        <>
            <div className="navbar">
                    <div className="nav-links">
                        { !token ? (
                        <>
                            <div className="link">
                                <Link to="/">HOME</Link>
                            </div>
                            <div className="link">
                                <Link to="/login">LOGIN</Link>
                            </div>
                            <div className="link">
                                <Link to="/register">REGISTER</Link>
                            </div> 
                        </> )
                        : (
                        <>
                            <div className="link">
                                <Link to="/profile">PROFILE</Link>
                            </div>
                            <div>
                                <button onClick={logout} >LOGOUT</button>
                            </div>
                        </> )
                        }
                    </div>
            </div>
        </>
    )
}

export default Navbar;