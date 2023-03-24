import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./main.css";

const LoginForm = () => {
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [item, setItem] = useState();

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("register"));
        setItem(items);
    }, []);

    const logindata = {
        uname: uname,
        password: password,
    };
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        if (uname === "" || password === "") {
            alert("please input login details");
        } else {
            const findUser = item?.find(
                (find) => find.uname === logindata.uname && find.password === logindata.password
            );
            if (findUser) {
                navigate("/list");
            } else {
                alert("User Does Not Exist");
                setUname("");
                setPassword("");
            }
        }
    };
    return (
        <div className="login-page">
            <div className="content">
            </div>
            <div className="login-div">
                <form className="login-form" onSubmit={handlesubmit}>
                {/* <label for="chk" aria-hidden="true">Login</label> */}
            <h1 style={{color:"#573b8a",borderBottom:"2px solid #573b8a",width:"90px",padding:"5px"}}>Login</h1>
                    <label>Username :</label>
                    <input
                        type="text"
                        placeholder="Enter Your Username..."
                        value={uname}
                        onChange={(e) => setUname(e.target.value)}
                    />
                    <br />
                    <br />
                    <label>Password :</label>
                    <input
                        type="password"
                        placeholder="Enter Your Passaword..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <button className="login-btn" type="submit">
                        Login
                    </button>
                    <hr />
                    Don't have account? <Link to="register"> Register here</Link>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
