import { useEffect, useState } from "react"
import { Link,  useNavigate } from "react-router-dom"

export const SentenceList = () => {
    const navigate = useNavigate()
    const [sentences, setSentences] = useState([])
    const [index, setIndex] = useState();

    useEffect(
        () => {
            fetch(`http://localhost:8088/sentences`)
                .then(res => res.json())
                .then((sentences) => {
                    setSentences(sentences)
                })
        },
        []
    )

    const generateSentence = () => {
        const index = Math.floor(Math.random() * sentences.length);
        setIndex(index);
    }

    return <>
        <h1>Our Sentences</h1>
        <button onClick={() => navigate("/sentences/create")} className="newSentenceButton">Submit Sentence</button>
        <article className="sentences">
            <p>{sentences[index] && sentences[index].title}</p>
            <p>{sentences[index] && sentences[index].content}</p>
            <Link to={`/sentenceTranslation/${index + 1}`}><button className="lowerButtons">Translate Me!</button></Link>
            <button className="lowerButtons" onClick={generateSentence}>Random Sentence</button>
        </article>
    </>
}