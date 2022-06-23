import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const StoryEdit = () => {
    const [story, updateStory] = useState({
        content: "",
        title: "",
        img: ""
    })
    const { storyId } = useParams()
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/userStories/${storyId}`)
                .then(res => res.json())
                .then((userStory) => {
                    updateStory(userStory)
                })
        },
        [storyId]
    )

    const handleClick = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/userStories/${story.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(story)
        })
            .then(res => res.json())
            .then(() => {
                navigate("/profile")
            })
    }

    return (
        <>
            <form className="storyForm">
                <h2 className="storyForm_Title">Edit Story</h2>
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
                            }></input>
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
                            }></input>
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
                            }></input>
                    </div>
                </fieldset>
                <button
                    onClick={(clickEvent) => handleClick(clickEvent)}
                    className="btn btn-primary">
                    Save
                </button>
            </form>
        </>
    )
}