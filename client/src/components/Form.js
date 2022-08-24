import { useState } from "react"

const Form = (props) => {
    const { createEvent, user } = props

    const defaultValues = {
        name: "",
        datetime: "",
        location: "",
        category: "Art",
        description: "",
        user_id: (user.id)
    }

    const [fields, setFields] = useState(defaultValues)
    const [image, setImage] = useState(null)

    const handleChange = (event) => {
        const { name, value } = event.target
        let updatedFields = {...fields}
        updatedFields[name] = value
        setFields(updatedFields)
    }

    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault()
        createEvent(fields, image)
    }

    const handleImageChange = (event) => {
        if (event.target.files[0] === null){
            setImage(null)
        } else {
            setImage(event.target.files[0])
        }
    }


    return (
        <div>
            <h2>Create Event</h2>
            <form id="create_event" onSubmit={handleSubmit}>
                <ul className="form">
                    <li>
                        <label htmlFor="name">Name of Event:</label>
                        <input type="text" name="name" onChange={handleChange} />
                    </li>
                    <li>
                        <label htmlFor="datetime">Datetime:</label>
                        <input type="datetime-local" name="datetime" onChange={handleChange} />
                    </li>
                    <li>
                        <label htmlFor="location">Location:</label>
                        <input type="text" name="location" onChange={handleChange} />
                    </li>
                    <li>
                        <label htmlFor="category">Category:</label>
                        <select name="category" form="create_event" onChange={handleChange}>
                            <option value="Art">Art</option>
                            <option value="Music">Music</option>
                            <option value="Sports">Sports</option>
                            <option value="Corporate">Corporate</option>
                            <option value="Community">Community</option>
                            <option value="Virtual">Virtual</option>
                        </select>
                    </li>
                    <li>
                        <label htmlFor="image">Image (default selected if blank):</label>
                        <input type="file" name="image" onChange={handleImageChange} />
                    </li>
                    <li>
                        <label htmlFor="description">Description:</label>
                        <textarea rows="8" cols="50" form="create_event" name="description" onChange={handleChange} />
                    </li>
                    <li>
                        <button>Submit</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}



export default Form