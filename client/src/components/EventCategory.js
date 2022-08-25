import { useParams, Link } from "react-router-dom"
import { useState } from "react";

const Event = (props) => {
    const { event, category } = props
    console.log(event);
    return (
        <div className="individual_event">
            <img src={event.image_url} alt="user uploaded event" />
            <ul className="form">
            <li><Link to={"/events/" + category + "/" + event.id}>{event.name}</Link></li>
                <li>Date: {event.datetime}</li>
                <li>Location: {event.location}</li>
            </ul>
        </div>
    )
}

const EventCategory = (props) => {
    const [query, setQuery] = useState("")
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

    const search = (data) => {
        return data.filter((item) => item.props.event.name.toLowerCase().includes(query) || item.props.event.location.toLowerCase().includes(query))
    }

    if (eventList) {
        return (
            <div className="events_container">
                <Link to={"/events/categories"}><p>Back to category list</p></Link>
                <h1>{category}</h1>
                <input type="text" placeholder="Search by name or location..." onChange={(e) => setQuery(e.target.value)} />
                {search(eventList)}
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