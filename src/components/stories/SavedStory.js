import { Link } from "react-router-dom"

export const SavedStory = () => {
    return (
        <div>
            <p>Story successfully saved!</p>
            <Link to={`/stories`}><button>Go back!</button></Link>
        </div>
    )
}