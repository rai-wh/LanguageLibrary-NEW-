import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export const TranslateVocab = () => {
  const { vocabId } = useParams();
  const [translation, setTranslation] = useState({});
  const [vocab, setVocab] = useState({});

  const getTranslation = (vocab) => {
    let form = new FormData();

    form.append('auth_key', '89b12a4a-e037-928e-562d-f0141da22bac:fx');
    form.append('text', vocab.content);
    form.append('target_lang', 'EN');

    fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      body: form,
    }).then(res => res.json())
      .then(translations => setTranslation(translations.translations[0]))
}


useEffect(
  () => {
    fetch(`http://localhost:8088/vocab?id=${vocabId}`)
      .then(res => res.json())
      .then((voc) => {
        let singleVocab = voc[0]
        setVocab(singleVocab)
      })
  },
  [vocabId]
)

useEffect(
  () => {
    if (vocab.content) {
      getTranslation(vocab)
      console.log(vocab)
    }
  },
  [vocab]
)

return <>
  <h1>{vocab.content}</h1>
  <p>{translation.text}</p>
  <Link to={`/vocab`}><button>Go back!</button></Link>
</>
}