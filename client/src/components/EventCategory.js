import { useParams, Link } from "react-router-dom"

const Event = (props) => {
    const { event, category } = props
    console.log(event);
    return (
        <div className="individual_event">
            <img src={event.image_url} alt="user uploaded event" />
            <ul className="form">
                <Link to={"/events/" + category + "/" + event.id}><li>{event.name}</li></Link>
                <li>Date: {event.datetime}</li>
                <li>Location: {event.location}</li>
            </ul>
        </div>
    )
}

const EventCategory = (props) => {
    const { category } = useParams()
    const eventList = props.events
        .filter((event) =>
            event.category === category
        )
        .map((event) => {
            return (
                <Event
                    event={event}
                    key={event.id}
                    category={category}
                />
            )
        })
    if (eventList) {
        return (
            <div className="events_container">
                <Link to={"/events/categories"}><p>Back to category list</p></Link>
                <h1>{category}</h1>
                {eventList}
            </div>
        )
    } else {
        return (
            <div>
                <h1>No events created for this category yet</h1>
            </div>
        )
    }
}


export default EventCategory