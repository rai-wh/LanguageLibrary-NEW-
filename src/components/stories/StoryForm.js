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

        fetch(`http://localhost:8088/stories`, {
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
            <h2 className="storyForm_title">New Story</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Title of the story."
                        value={story.title}
                        onChange={
                            (evt) => {
                                const copy = {...story}
                                copy.title = evt.target.value
                                updateStory(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Content:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Content of the story."
                        value={story.content}
                        onChange={
                            (evt) => {
                                const copy = {...story}
                                copy.content = evt.target.value
                                updateStory(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Picture:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Link to a picture."
                        value={story.img}
                        onChange={
                            (evt) => {
                                const copy = {...story}
                                copy.img = evt.target.value
                                updateStory(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Picture:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Language used."
                        value={story.language}
                        onChange={
                            (evt) => {
                                const copy = {...story}
                                copy.language = evt.target.value
                                updateStory(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button onClick={(evt) => handleSaveButtonClick(evt)} className="btn btn-primary">
                Submit Story
            </button>
        </form>
    )
}