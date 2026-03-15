import { BrowserRouter, Route, Routes, Link} from "react-router";
import User_Login from "./User_Login.jsx";
import User_Register from "./User_Register";
import "./Navbar.css";

function Navbar(){
    return(
        <>
            <div className="head">
                <h1>Welcome to myApp</h1>
            </div>
            <div className="navbar">
                <BrowserRouter>
                    <div className="nav-links">
                        <div className="link">
                            <Link to="/login">LOGIN</Link>
                        </div>
                        <div className="link">
                            <Link to="/register">REGISTER</Link>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/login" element={<User_Login/>} />
                        <Route path="/register" element={<User_Register/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default Navbar;