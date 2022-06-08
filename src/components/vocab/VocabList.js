import { useEffect, useState } from "react"
import { Link,  useNavigate } from "react-router-dom"

export const VocabList = () => {
    const navigate = useNavigate()
    const [vocab, setVocab] = useState([])
    const [index, setIndex] = useState();

    useEffect(
        () => {
            fetch(`http://localhost:8088/vocab`)
                .then(res => res.json())
                .then((voc) => {
                    setVocab(voc)
                })
        },
        []
    )

    const genVocab = () => {
        const index = Math.floor(Math.random() * vocab.length);
        setIndex(index);
    }

    return <>
        <h1>Random Vocab</h1>
        <button onClick={() => navigate("/vocab/create")} className="newVocabButton">Submit Vocab</button>
        <article className="vocab">
            <h1>{vocab[index] && vocab[index].content}</h1>
            <p>{vocab[index] && vocab[index].romaji}</p>
            <Link to={`/vocabTranslation/${index + 1}`}><button className="lowerButtons">Translate Me!</button></Link>
            <button className="lowerButtons" onClick={genVocab}>Random Word</button>
        </article>
    </>
}