import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export const TranslateSentence = () => {
  const { sentenceId } = useParams();
  const [translation, setTranslation] = useState({});
  const [sentence, setSentence] = useState({});

  const getTranslation = (sentence) => {
    let form = new FormData();

    form.append('auth_key', '89b12a4a-e037-928e-562d-f0141da22bac:fx');
    form.append('text', sentence.content);
    form.append('target_lang', 'EN');

    fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      body: form,
    }).then(res => res.json())
      .then(translations => setTranslation(translations.translations[0]))
}


useEffect(
  () => {
    fetch(`http://localhost:8088/sentences?id=${sentenceId}`)
      .then(res => res.json())
      .then((sentence) => {
        let singleSentence = sentence[0]
        setSentence(singleSentence)
      })
  },
  [sentenceId]
)

useEffect(
  () => {
    if (sentence.content) {
      getTranslation(sentence)
    }
  },
  [sentence]
)

return <>
  <h1>{sentence.title}</h1>
  <p>{translation.text}</p>
  <Link to={`/sentences`}><button>Go back!</button></Link>
</>
}