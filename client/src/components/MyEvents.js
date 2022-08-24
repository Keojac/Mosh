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
            <td>
                <Link to={"/profile/edit-event/" + event.id}>
                    <button>Edit</button>
                </Link>
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
        <>
        <h1>My Events</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Datetime</th>
              <th>Location</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>{eventList}</tbody>
        </table>
      </>
    )
}



export default MyEvents