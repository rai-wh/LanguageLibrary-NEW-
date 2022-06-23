import Select from 'react-select'

export const SelectDifficulty = ({ setterFunction }) => {

    const difficulties = [
        { value: "easy", label: "Easy" },
        { value: "medium", label: "Medium" },
        { value: "hard", label: "Hard" }
    ]

    return (
        <div>
            <Select
                className='storyDifficulties'
                placeholder='Which difficulty?'
                options={difficulties}
                onChange={
                    (e) => {
                        setterFunction(e.value)
                    }
                }
            />
        </div>
    )
}