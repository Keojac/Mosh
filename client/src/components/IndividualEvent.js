import { useParams, Link } from "react-router-dom"

const IndividualEvent = (props) => {
    const { eventID } = useParams()
    const param = parseInt(eventID)
    const event = props.events.find((event) => event.id === param)
    const user = props.users.find((user) => event.user_id === user.id)
    return (
        <div>
            <div>
                <Link to={"/events/" + event.category}><p id="prev">Back to {event.category}</p></Link>
                <h1>{event.name}</h1>
                <img id="event_image" src={event.image_url} alt="user uploaded event" />
                <div className="event_details">
                    <ul className="form">
                        <li>Date/ Time: {event.datetime}</li>
                        <li>Location: {event.location}</li>
                        <li>Description: {event.description}</li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Get in touch:</h3>
                    <img className="profile_picture" src={user.profile_image} alt="user profile" />
                    <h4>{user.username}</h4>
                </div>
            </div>
        </div>
    )
}


export default IndividualEvent