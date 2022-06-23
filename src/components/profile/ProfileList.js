import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export const ProfileList = () => {
    const [userStories, setUserStories] = useState([]);
    const [filteredStories, setFiltered] = useState([]);
    const { storyId } = useParams();

    let currentUser = JSON.parse(localStorage.getItem('lang_user'));

    useEffect(
        () => {
            fetch(`http://localhost:8088/userStories`)
                .then(res => res.json())
                .then((stories) => {
                    setUserStories(stories)
                })
        },
        []
    )

    useEffect(
        () => {
            if (currentUser) {
                const stories = userStories.filter(story => story.userId === currentUser)
                setFiltered(stories)
            }
        },
        [userStories]
    )

    return <>
        <h2>Your Saved Stories</h2>
        <h3>Click the story title to edit and click the image to view.</h3>
        <article className="savedStories">
            {
                filteredStories.map(
                    (story) => {
                        return <section className="userStory">
                            <h2><Link to={`/userStory/${story.id}/edit`}>{story.title}</Link></h2>
                            <Link to={`/savedStory/${story.id}`}><img id={story.id} src={story.img}></img></Link>
                        </section>
                    }
                )
            }
        </article>
    </>


}

