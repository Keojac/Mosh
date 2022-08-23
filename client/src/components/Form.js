const Form = (props) => {
    return (
        <div>
            <h2>Create Event</h2>
            <form>
                <ul className="form">
                    <li>
                        <label htmlFor="name">Name of Event:</label>
                        <input type="text" name="name" />
                    </li>
                    <li>
                        <label htmlFor="datetime">Datetime:</label>
                        <input type="datetime-local" name="datetime" />
                    </li>
                    <li>
                        <label htmlFor="location">Location:</label>
                        <input type="text" name="location" />
                    </li>
                    <li>
                        <label htmlFor="category">Category:</label>
                        <select name="category">
                            <option value="art">Art</option>
                            <option value="music">Music</option>
                            <option value="sports">Sports</option>
                            <option value="corporate">Corporate</option>
                            <option value="community">Community</option>
                            <option value="virtual">Virtual</option>
                        </select>
                    </li>
                    <li>
                        <label htmlFor="image">Image (default selected if blank):</label>
                        <input type="file" name="image" />
                    </li>
                    <li>
                        <label htmlFor="description">Description:</label>
                        <textarea rows="8" cols="50" />
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