import { Link } from 'react-router-dom'

const Login = (props) => {
    return (
        <div>
            <form>
                <ul className="form">
                    <li>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" />
                    </li>
                    <li>
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password" />
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