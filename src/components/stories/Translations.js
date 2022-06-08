import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export const TranslateStory = () => {
  const { storyId } = useParams();
  const [translation, setTranslation] = useState({});
  const [story, setStory] = useState({});

  const getTranslation = (story) => {
    let form = new FormData();

    form.append('auth_key', '89b12a4a-e037-928e-562d-f0141da22bac:fx');
    form.append('text', story.content);
    form.append('target_lang', 'EN');

    fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      body: form,
    }).then(res => res.json())
      .then(translations => setTranslation(translations.translations[0]))
}


useEffect(
  () => {
    fetch(`http://localhost:8088/stories?id=${storyId}`)
      .then(res => res.json())
      .then((story) => {
        let singleStory = story[0]
        setStory(singleStory)
      })
  },
  [storyId]
)

useEffect(
  () => {
    if (story.content) {
      getTranslation(story)
    }
  },
  [story]
)

return <>
  <h1>{story.title}</h1>
  <p>{translation.text}</p>
  <Link to={`/story/${story.id}`}><button>Go back!</button></Link>
</>
}