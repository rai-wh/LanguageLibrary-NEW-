import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const SentenceForm = () => {
    const navigate = useNavigate()
    const [sentence, updateSentence] = useState({
        title: "",
        content: "",
    })

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const newSentence = {
            title: sentence.title,
            content: sentence.content,
        }

        fetch(`http://localhost:8088/sentences`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSentence)
        })
            .then(res => res.json())
            .then(() => {
                navigate("/sentences")
            })
    }

    return (
        <form className="sentenceForm">
            <h2 className="sentenceForm-title">New Sentence</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Title of the sentence."
                        value={sentence.title}
                        onChange={
                            (evt) => {
                                const copy = {...sentence}
                                copy.title = evt.target.value
                                updateSentence(copy)
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
                        placeholder="Content of the sentence."
                        value={sentence.content}
                        onChange={
                            (evt) => {
                                const copy = {...sentence}
                                copy.content = evt.target.value
                                updateSentence(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button onClick={(evt) => handleSaveButtonClick(evt)} className="btn btn-primary">
                Submit Sentence
            </button>
        </form>
    )
}