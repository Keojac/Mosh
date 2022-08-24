import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import date from 'date-and-time';
import Button from "react-bootstrap/esm/Button";

const Edit = (props) => {
    const navigate = useNavigate();
    const { events, currentUser, handleEdit, handleDelete } = props

    const defaultValues = {
        name: "",
        datetime: "",
        location: "",
        category: "",
        description: "",
        user_id: (currentUser.id)
    }
    const { eventID } = useParams();
    const params = parseInt(eventID)
    const event = events.find((event) => event.id === params);
    const index = events.indexOf(event);

    const [fields, setFields] = useState(defaultValues);
    const [image, setImage] = useState(null)

    const onSubmit = (event) => {
        event.preventDefault();
        handleEdit(fields, index, image);
        navigate("/profile/" + currentUser.id + "/myevents");
    };

    // updating fields at mount with values of the event that is being updated

    const giveInfo = () => {
        setFields(event);
    };

    useEffect(() => {
        giveInfo()
    }, [])

    // updating the fields with the new values

    const handleChange = (event) => {
        const { name, value } = event.target;
        const updatedEvent = {
            ...fields,
            [name]: value
        };
        setFields(updatedEvent)
    };

    // For passing in the image as a file

    const handleImageChange = (event) => {
        if (event.target.files[0] === null) {
            setImage(null)
        } else {
            setImage(event.target.files[0])
        }
    }

    // Delete Function
    const handleClick = () => {
        handleDelete(params)
        navigate(`/profile/${currentUser.id}/myevents`)
    }

    // Converting the date time from the fields into the html format required
    const dateTime = new Date(fields.datetime)
    const newDatetime = date.format(dateTime, "YYYY-MM-DDTHH:mm")


    return (
        <div>
            <h2>Edit Event</h2>
            <form onSubmit={onSubmit}>
                <ul className="form">
                    <li>
                        <label htmlFor="name">Name of Event:</label>
                        <input type="text" name="name" onChange={handleChange} value={fields.name} />
                    </li>
                    <li>
                        <label htmlFor="datetime">Datetime (Previous datetime kept if blank):</label>
                        <input type="datetime-local" name="datetime" onChange={handleChange} value={newDatetime} />
                    </li>
                    <li>
                        <label htmlFor="location">Location:</label>
                        <input type="text" name="location" onChange={handleChange} value={fields.location} />
                    </li>
                    <li>
                        <label htmlFor="category">Category:</label>
                        <select name="category" form="create_event" onChange={handleChange} value={fields.category}>
                            <option value="Art">Art</option>
                            <option value="Music">Music</option>
                            <option value="Sports">Sports</option>
                            <option value="Corporate">Corporate</option>
                            <option value="Community">Community</option>
                            <option value="Virtual">Virtual</option>
                        </select>
                    </li>
                    <li>
                        <label htmlFor="image">Image (Previous Image kept if blank):</label>
                        <input type="file" name="image" onChange={handleImageChange} />
                    </li>
                    <li>
                        <label htmlFor="description">Description:</label>
                        <textarea rows="8" cols="50" form="create_event" name="description" onChange={handleChange} value={fields.description} />
                    </li>
                    <li>
                        <input type="submit" value="Save" />
                    </li>
                    <li>
                        <Button variant="danger" onClick={handleClick}>Delete Event</Button>
                    </li>
                </ul>
            </form>
        </div>
    );
};

export default Edit;
