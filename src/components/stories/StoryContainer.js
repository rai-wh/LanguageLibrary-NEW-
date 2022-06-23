import { useState } from "react"
import { SelectDifficulty } from "./StoryDifficulty";
import { StoryForm } from "./StoryForm";
import { StoryList } from "./StoryList";

export const StoryContainer = () => {
    const [difficulty, setDifficulty] = useState("");

    return <>
        <SelectDifficulty setterFunction={setDifficulty} />
        <StoryList difficultyState={difficulty} />
    </>
}