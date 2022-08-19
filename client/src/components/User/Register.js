import { Link } from 'react-router-dom'

const Register = (props) => {
    return (
        <div>
            <h1>Register</h1>
            <ul className="form">
                <li>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" />
                </li>
                <li>
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" />
                </li>
                <li>
                    <label htmlFor="interests">Interests: </label>
                    <input type="text" name="username" />
                </li>
                <li>
                    <label htmlFor="location">Location: </label>
                    <input type="text" name="location" />
                </li>
                <li>
                    <input type="submit" value="Register" />
                </li>
            </ul>
            <p>Already registered? Login <Link to="/login">here</Link></p>
        </div>
    )
}



export default Register