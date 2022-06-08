import { useEffect, useState } from "react"
import { Link,  useNavigate } from "react-router-dom"

export const StoryList = (id) => {
    const navigate = useNavigate()
    const [stories, setStories] = useState([])

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
    return <>
        <h1>Our Stories</h1>
        <button onClick={() => navigate("/story/create")} className="newStoryButton">Submit Story</button>
        <article className="stories">
            {
                stories.map(
                    (story) => {
                        return <section className="story">
                            <h2>{story.title}</h2>
                            <Link to={`/story/${story.id}`}><img id={story.id} src={story.img}></img></Link>
                            <button class="storyButton">Save</button>
                        </section>
                    }
                )
            }
        </article>
    </>
}