import { useState } from "react";
import { useNavigate } from "react-router";
import User_Login from "./User_Login";
import User_Register from "./User_Register";
import Navbar from "./Navbar";
import Profile from "./Profile";
import "./UserAuth.css";

function Home(){
    return(
        <>
            <div className="head">
                <h1>Welcome to myApp</h1>
            </div>
        </>
    )
}

export default Home;