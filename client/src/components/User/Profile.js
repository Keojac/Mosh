import { useParams, Link } from "react-router-dom"
import { useEffect } from "react"

const Profile = (props) => {
    const { users } = props
    const { userID } = useParams()
    const param = parseInt(userID)
    const user = users.find((user) => param === user.id)

    return (
        <div>
            <h1>{user.username}'s Profile</h1>
            <ul className="form">
                <li><img className="profile_picture" src={user.profile_image} alt="user profile" /></li>
                <li><h3>Interests:</h3><p>{user.interests ? user.interests : "No interests listed"}</p></li>
                <li><h3>Location:</h3><p>{user.location}</p></li>
            </ul>
            <Link to={`/profile/edit-profile/${user.id}`}><button>Edit Profile</button></Link>
        </div>
    )
}






export default Profile 