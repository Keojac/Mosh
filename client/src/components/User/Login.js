import { Link } from 'react-router-dom'
import { useState } from 'react'
import Alert from 'react-bootstrap/Alert';

const Login = (props) => {
    const [fields, setFields] = useState({ username: "", password: "" })
    // Message Flash
    const [message, setMessage] = useState("")
    const handleChange = (event) => {
        setFields({
            ...fields,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await fetch(`/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(fields),
        });
        const data = await res.json()
        console.log(data);
        props.handleLogin(data)
    };
    

    return (
        <div>
            {/* {message ? <Alert variant="success">Successfuly logged in!</Alert>
            : <Alert variant="danger">Username or password is incorrect</Alert>} */}
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

                <ul className="form">
                    <li>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" onChange={handleChange} />
                    </li>
                    <li>
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password" onChange={handleChange} />
                    </li>
                    <li>
                        <input type="submit" value="Login" />
                    </li>
                </ul>
            </form>
            <p>Don't have an account? Register <Link to="/register">here</Link></p>
        </div>
    )
}



export default Login