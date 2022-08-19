import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <Navbar className="navbar" variant="light" expand="lg">
            <Container>
                <Link className="title" to="/">
                    <h1 className="title">Mosh</h1>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav_text" to="/">Home</Link>
                        <Link className="nav_text" to="/events/categories">Categories</Link>
                        <Link className="nav_text" to="/events/new">Create Event</Link>
                        <Link className="nav_text" to="/profile">My Profile</Link>
                        <Link className="nav_text" to="/events/user">My Events</Link>
                        <Link className="nav_text" to="/register">
                            {" "}
                            <Button className="register" variant="dark">
                                Register
                            </Button>{" "}
                        </Link>
                        <Link className="nav_text" to="/login">
                            <Button className="login" variant="primary">
                                Log In
                            </Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;