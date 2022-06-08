import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const StoryForm = () => {
    const navigate = useNavigate()
    const [story, updateStory] = useState({
        title: "",
        content: "",
        img: "",
        language: ""
    })

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const newStory = {
            title: story.title,
            content: story.content,
            img: story.img,
            language: story.language
        }

        fetch(`http://localhost:8088/userStories`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStory)
        })
            .then(res => res.json())
            .then(() => {
                navigate("/stories")
            })
    }

    return (
        <form className="storyForm">
            <h2 className="storyForm_title">Save this story?</h2>
            <button onClick={(evt) => handleSaveButtonClick(evt)} className="btn btn-primary">
                Save
            </button>
        </form>
    )
}