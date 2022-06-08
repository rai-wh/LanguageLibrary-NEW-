import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import { TranslateStory } from "./Translations";


export const Story = () => {
    const { storyId } = useParams();
    const [story, setStory] = useState({});
    const navigate = useNavigate();

    useEffect(
        () => {
            fetch(`http://localhost:8088/stories?id=${storyId}`)
                .then(res => res.json())
                .then((story) => {
                    const singleStory = story[0]
                    setStory(singleStory)
                })
        },
        [storyId]
    )
    return (
        <>
            <h1>{story.title}</h1>
            <p>{story.content}</p>
            <Link to={`/translation/${story.id}`}><button>Translate Me!</button></Link>
            <Link to={`/save/${story.id}`}><button>Save this story!</button></Link>
            </>
            )
}