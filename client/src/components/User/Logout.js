import Button from "react-bootstrap/esm/Button"

const Logout = (props) => {
    const handleClick = async () => {
        const res = await fetch("/logout", {
            method: "POST",
        })
        props.handleLogout()
    }


    return (
        <Button
            className="logout_button"
            variant="secondary"
            onClick={handleClick}
        >
            Logout
        </Button>
    )
}

export default Logout