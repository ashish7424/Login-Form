
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [uname, setUname] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState([])
    console.log(user)
    // const navigate = useNavigate()
    const data = {
        fname: fname,
        lname: lname,
        uname: uname,
        password: password
    }
    const handlesubmit = (e) => {
        // localStorage.setItem("register",JSON.stringify(data))
        e.preventDefault()
        if (fname === "" || lname === "" || uname === "" || password === "") {
            alert("please input all field")
        } else {
            setUser([...user, data])
            localStorage.setItem("register", JSON.stringify([...user, data]))
            setFname("")
            setLname("")
            setUname("")
            setPassword("")
            // navigate("/")
        }
    }
    return (
        <div className=''>
            <div className='form1'>
                <form className='form' onSubmit={handlesubmit}>
                    <h1 style={{ color:"#573b8a",borderBottom:"2px solid #573b8a",width:"220px",padding:"5px" }}>Register Here!</h1>
                    <label>Firstname:</label>
                    <div className='input'>
                        <input type='text' placeholder='Enter Your Firstname...' value={fname} onChange={(e) => setFname(e.target.value)} /></div><br />
                    <label>LastName:</label>
                    <div className='input'>
                        <input type='text' placeholder='Enter Your Lastname...' value={lname} onChange={(e) => setLname(e.target.value)} /></div><br />
                    <label>Username :</label>
                    <div className='input'>
                        <input type='text' placeholder='Enter Your Username...' value={uname} onChange={(e) => setUname(e.target.value)} /></div><br />
                    <label>Password :</label>
                    <div className='input'>
                        <input type='password' placeholder='Enter Your Password...' value={password} onChange={(e) => setPassword(e.target.value)} /></div><br />
                    <button className='register-btn' type='submit'>Register</button>
                    <br/>
                    <hr />
                    Already have account? <Link to="/">Login here</Link>
                </form>
            </div>
        </div>
    )
}

export default Register
