import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EditProfile = (props) => {
    const navigate = useNavigate();
    const { currentUser, users, handleProfileEdit } = props
    
    const { userID } = useParams()
    const param = parseInt(userID)
    const user = users.find((user) => param === user.id)
    const index = users.indexOf(user)

    const defaultProfile = {
        username: "",
        interests: "",
        location: "",
        id: (currentUser.id)
    }

    const [fields, setFields] = useState(defaultProfile)
    const [image, setImage] = useState(null)

    // updating fields at mount with values of the profile that is being updated

    const giveInfo = () => {
        setFields(user);
    }

    useEffect(() => {
        giveInfo()
    }, [])


    // updating the fields with the new values

    const handleChange = (event) => {
        const { name, value } = event.target;
        const updatedProfile = {
            ...fields,
            [name]: value
        }
        setFields(updatedProfile)
    }

    // For passing in the image as a file

    const handleImageChange = (event) => {
        if (event.target.files[0] === null) {
            setImage(null)
        } else {
            setImage(event.target.files[0])
        }
    }

    // Passing values back to edit function in app

    const onSubmit = (event) => {
        event.preventDefault();
        handleProfileEdit(fields, index, image);
        // navigate("/profile/" + user.id);
    }

    return (
        <div>
            <h2>Edit Profile</h2>
            <Link to={"/profile/" + user.id}><p>Back to Profile</p></Link>
            <form onSubmit={onSubmit}>
                <ul className="form">
                    <li>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" onChange={handleChange} value={fields.username} />
                    </li>
                    <li>
                        <label htmlFor="image">Profile_Image (Previous image kept if blank):</label>
                        <input type="file" name="image" onChange={handleImageChange} />
                    </li>
                    <li>
                        <label htmlFor="interests">Interests:</label>
                        <input type="text" name="interests" onChange={handleChange} value={fields.interests} />
                    </li>
                    <li>
                        <label htmlFor="location">Location:</label>
                        <input type="text" name="location" onChange={handleChange} value={fields.location} />
                    </li>
                    <li>
                        <input type="submit" value="Save" />
                    </li>
                </ul>
            </form>
        </div>
    )
}



export default EditProfile