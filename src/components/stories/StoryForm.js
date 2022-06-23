import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Select from 'react-select'

export const StoryForm = () => {
    const navigate = useNavigate()
    const [story, updateStory] = useState({
        title: "",
        content: "",
        img: "",
        difficulty: ""
    })

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const newStory = {
            title: story.title,
            content: story.content,
            img: story.img,
            difficulty: story.difficulty
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

    const difficulties = [
        { value: "easy", label: "Easy" },
        { value: "medium", label: "Medium" },
        { value: "hard", label: "Hard" }
    ]

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
                                const copy = { ...story }
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
                                const copy = { ...story }
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
                                const copy = { ...story }
                                copy.img = evt.target.value
                                updateStory(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Difficulty:</label>
                    <Select
                        className='storyFormDifficulties'
                        options={difficulties}
                        onChange={
                            (evt) => {
                                const copy = { ...story }
                                console.log(evt.value)
                                copy.difficulty = evt.value
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