import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";

export const UserStory = () => {
    const { storyId } = useParams();
    const [story, setStory] = useState({});

    useEffect(
        () => {
            fetch(`http://localhost:8088/userStories?id=${storyId}`)
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
            <Link to={`/userTranslation/${story.id}`}><button>Translate Me!</button></Link>
            </>
            )
}