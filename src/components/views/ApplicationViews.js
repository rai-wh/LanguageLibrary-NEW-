import { Outlet, Route, Routes } from "react-router-dom"
import { SentenceForm } from "../sentences/SentenceForm"
import { SentenceList } from "../sentences/SentenceList"
import { TranslateSentence } from "../sentences/SentenceTranslations"
import { Story } from "../stories/Stories"
import { StoryForm } from "../stories/StoryForm"
import { StoryList } from "../stories/StoryList"
import { TranslateStory } from "../stories/Translations"
import { VocabForm } from "../vocab/VocabForm"
import { VocabList } from "../vocab/VocabList"
import { TranslateVocab } from "../vocab/VocabTranslation"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>LanguageLibrary</h1>
					<div>A simple way to have fun learning!</div>

                    <Outlet />
                </>
            }>

                <Route path="stories" element={ <StoryList /> } />
                <Route path="story/:storyId" element={ <Story />} />
                <Route path="translation/:storyId" element={ <TranslateStory />} />
                <Route path="story/create" element={ <StoryForm /> } />
                <Route path="sentences" element={ <SentenceList /> } />
                <Route path="sentences/create" element={ <SentenceForm /> } />
                <Route path="sentenceTranslation/:sentenceId" element={ <TranslateSentence />} />
                <Route path="vocab" element={ <VocabList /> } />
                <Route path="vocabTranslation/:vocabId" element={ <TranslateVocab />} />
                <Route path="vocab/create" element={ <VocabForm /> } />
            </Route>
        </Routes>
    )
}