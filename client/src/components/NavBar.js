import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
        <Navbar className="navbar" bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Mosh</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/categories">Categories</Nav.Link>
                        <Nav.Link href="/profile">My Profile</Nav.Link>
                        <Nav.Link href="/new">Create Event</Nav.Link>
                        <Nav.Link href="/categories">My Events</Nav.Link>
                        <Link to="/register">
                            {" "}
                            <Button className="register" variant="secondary">
                                Register
                            </Button>{" "}
                        </Link>
                            <Link to="/login">
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