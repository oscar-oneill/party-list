import React, { useState } from 'react'
import { Person as Props } from '../App'

interface ListProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<ListProps> = ({ people, setPeople }) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        imageUrl: "",
        isVaccinated: "",
        note: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>): void => { // Two-way binding
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (!input.name || !input.age || !input.imageUrl) {
            return
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                imageUrl: input.imageUrl,
                isVaccinated: input.isVaccinated,
                note: input.note,
            }
        ])

        setInput({
            name: "",
            age: "",
            imageUrl: "",
            isVaccinated: "",
            note: "",
        })
    }

    return (
        <div className="addToList">
            <input
                type="text"
                placeholder="Name"
                className="addToList-input"
                onChange={handleChange}
                value={input.name}
                name="name"
            />

            <input
                type="text"
                placeholder="Age"
                className="addToList-input"
                onChange={handleChange}
                value={input.age}
                name="age"
            />

            <input
                type="text"
                placeholder="Image URL"
                className="addToList-input"
                onChange={handleChange}
                value={input.imageUrl}
                name="imageUrl"
            />

            <select
                value={input.isVaccinated}
                onChange={handleChange}
                className="addToList-select"
                name="isVaccinated"
            >
                <option disabled value="">Vaccinated?</option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>

            <textarea
                placeholder="Note"
                className="addToList-input"
                onChange={handleChange}
                value={input.note}
                name="note"
            />

            <button
                className="addToList-btn"
                onClick={handleClick}
            >
                Add To List
            </button>
        </div>
    )
}

export default AddToList
