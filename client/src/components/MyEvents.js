import { Link } from "react-router-dom"

const Event = (props) => {
    const { event } = props
    return (

        <tr className="event_table">
            <td>
                <Link to={"/events/" + event.category + "/" + event.id}>{event.name}</Link>
            </td>
            <td>{event.datetime}</td>
            <td>{event.location}</td>
            <td>{event.category}</td>
            <td>{event.description}</td>
            <td>
                <Link to={"/my-reviews/edit/" + event.id}>
                    <button>Edit</button>
                </Link>
            </td>
            <td>
                <button>Delete</button>
            </td>
        </tr>

    )
}

const MyEvents = (props) => {
    const { events, currentUser } = props
    const eventList = events
        .filter((event) =>
            event.user_id === currentUser.id
        )
        .map((event) => {
            return (
                <Event
                    event={event}
                    key={event.id}
                />
            )
        })
    return (
        <div>
            <h2>My Events</h2>
            {eventList}
        </div>
    )
}



export default MyEvents