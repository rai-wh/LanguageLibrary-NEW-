import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const VocabForm = () => {
    const navigate = useNavigate()
    const [vocab, setVocab] = useState({
        content: "",
        romaji: "",
        language: ""
    })

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const newVocab = {
            content: vocab.content,
            romaji: vocab.romaji,
            language: vocab.language
        }

        fetch(`http://localhost:8088/vocab`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newVocab)
        })
            .then(res => res.json())
            .then(() => {
                navigate("/vocab")
            })
    }

    return (
        <form className="vocabForm">
            <h2 className="vocabForm-title">New Word</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Word:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Kanji or Hiragana"
                        value={vocab.content}
                        onChange={
                            (evt) => {
                                const copy = {...vocab}
                                copy.content = evt.target.value
                                setVocab(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Romaji:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Romaji (Romanized spelling)"
                        value={vocab.romaji}
                        onChange={
                            (evt) => {
                                const copy = {...vocab}
                                copy.romaji = evt.target.value
                                setVocab(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button onClick={(evt) => handleSaveButtonClick(evt)} className="btn btn-primary">
                Submit Word
            </button>
        </form>
    )
}