import React from 'react'
import { Person as Props } from '../App'

const List: React.FC<Props> = ({people}) => {
    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
                <li className="list">
                    <div className="listHeader">
                        <img src={person.imageUrl} alt="" className="listImg" />
                        <h2>{person.name}</h2>
                    </div>
                    <p>Vaccination Status: {person.isVaccinated === "true" ? "Vaccinated" : "Unvaccinated"}</p>
                    <p className="listNote">{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List
