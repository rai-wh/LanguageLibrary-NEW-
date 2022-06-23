import { useEffect, useState } from "react"
import { Link,  useNavigate } from "react-router-dom"
import Select from 'react-select'

export const StoryList = ({ difficultyState }) => {
    const navigate = useNavigate()
    const [stories, setStories] = useState([])
    const [filteredStories, setFiltered] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/stories`)
                .then(res => res.json())
                .then((stories) => {
                    setStories(stories)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            const filteredStories = stories.filter(story => story.difficulty.startsWith(difficultyState))
            setFiltered(filteredStories)
            console.log(filteredStories)
        },
        [ difficultyState ]
    )

    let currentUser = JSON.parse(localStorage.getItem('lang_user'));



    return <>
        <button onClick={() => navigate("/story/create")} className="newStoryButton">Submit New Story</button>
        <article className="stories">
            {
                filteredStories.map(
                    (story) => {
                        return <section className="story">
                            <h2>{story.title}</h2>
                            <Link to={`/story/${story.id}`}><img id={story.id} src={story.img}></img></Link>
                            <button 
                            onClick={() => {
                                fetch(`http://localhost:8088/userStories`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        userId: currentUser,
                                        storyId: story.id,
                                        content: story.content,
                                        title: story.title,
                                        difficulty: story.difficulty,
                                        img: story.img
                                    })
                                })
                                .then(res => res.json())
                                .then(() => {
                                    navigate("/")
                                })
                            }}
                            class="storyButton"
                            >Save</button>
                        </section>
                    }
                )
            }
        </article>
    </>
}