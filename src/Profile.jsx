import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./UserAuth.css";

function Profile(){
    const [data, setdata] = useState(null);
    const navigate = useNavigate();
    const api_url = "https://user-authentication-mongodb-demo.onrender.com/api/auth/protected"

    useEffect(() => {
        getProfile()
    },[navigate])

    async function getProfile(){
            const token = localStorage.getItem("token");
            if(!token){
                navigate("/login");
                return;
            }
        try{
            const response = await axios.get(api_url,{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            setdata(response.data);
        }catch(err){
            console.log(err);
            localStorage.removeItem("token");
            navigate("/login");
        }
    }

    return(
        <>
            <div className="profile">
                <h2>Profile</h2>
                {
                    data ? (
                        <div className="data">
                            <div className="d">
                                <h4>Name</h4>
                                <h3>{data.name}</h3>
                            </div>
                            <div className="d">
                                <h4>Email</h4>
                                <h3>{data.email}</h3>
                            </div>
                        </div>
                    )
                    :
                    (
                        <p>Loading...</p>
                    )
                }
            </div>
        </>
    )
}

export default Profile;