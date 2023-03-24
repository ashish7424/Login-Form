import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "./main.css"
import { Link } from 'react-router-dom';

const List = () => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userdata, setUserdata] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [index, setIndex] = useState(0)

    const resetField = () => {
        setFname("")
        setLname("")
        setEmail("")
        setPassword("")
    }
    const Submit = (e) => {
        e.preventDefault()
        const data = {
            fname: fname,
            lname: lname,
            email: email,
            password: password
        }
        if (isEdit) {
            const arr = userdata;
            for (let i = 0; i < arr.length; i++) {
                if (i === index) {
                    arr[i] = data;
                    // console.log(arr[i])
                    resetField()
                    setIndex("")
                }
            }
            setIsEdit(false)
        } else {
            setUserdata([...userdata, data])
            resetField()
        }
    }
    const onEdit = (item, index) => {
        setFname(item.fname)
        setLname(item.lname)
        setEmail(item.email)
        setPassword(item.password)
        setIsEdit(true)
        setIndex(index)
    }
    const onDelete = (index) => {
        const row = userdata
        row.splice(index, 1)
        setUserdata([...row])
    }
    return (
        <div>
            <div className='navbar'>
                <Link to="/">Logout</Link>
            </div>
            <div style={{ justifyContent: "center", display: "flex" }}>
                {/* <h1>list</h1> */}
                <form className='list-form' onSubmit={Submit}>
                    <label>Firstname:</label>
                    <input type='text' placeholder='Enter Your Firstname...' value={fname} onChange={(e) => setFname(e.target.value)} /><br /><br />
                    <label>LastName:</label>
                    <input type='text' placeholder='Enter Your Lastname...' value={lname} onChange={(e) => setLname(e.target.value)} /><br /><br />
                    <label>Username :</label>
                    <input type='text' placeholder='Enter Your Username...' value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                    <label>Password :</label>
                    <input type='password' placeholder='Enter Your Password...' value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                    <button className='submit-btn' type='submit'>{isEdit ? "Update" : "Submit"}</button><br /><br />
                </form>
            </div ><br /><br />
            <div style={{ justifyContent: "center", display: "flex" }}>
                <table className='customers'>
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>User Name</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userdata.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.fname}</td>
                                        <td>{item.lname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>
                                        <td><EditIcon style={{ marginRight: "20px" }} onClick={() => onEdit(item, index)} />
                                            <DeleteIcon onClick={() => onDelete(index)} /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default List
