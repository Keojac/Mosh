import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Register = (props) => {
    const [fields, setFields] = useState({ username: "", password: "", location: "" })
    const navigate = useNavigate()
    const handleChange = (event) => {
        setFields({
            ...fields,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await fetch(`/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(fields),
        })
        const data = await res.json()
        navigate("/login")
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <ul className="form">
                    <li>
                        <label htmlFor="username">Username: </label>
                        <input type="text" name="username" onChange={handleChange} />
                    </li>
                    <li>
                        <label htmlFor="password">Password: </label>
                        <input type="text" name="password" onChange={handleChange} />
                    </li>
                    <li>
                        <label htmlFor="location">Location: </label>
                        <input type="text" name="location" onChange={handleChange} />
                    </li>
                    <li>
                        <input type="submit" value="Register" />
                    </li>
                </ul>
            </form>
            <p>Already registered? Login <Link to="/login">here</Link></p>
        </div>
    )
}



export default Register