import React, { useState } from 'react';
import './App.css';
import List from './Components/List'
import AddToList from './Components/AddToList';

export interface Person {
  people: {
    name: string
    age: number
    imageUrl: string
    isVaccinated: string
    note?: string
  }[]
}

const App = () => {
  const [people, setPeople] = useState<Person["people"]>([])

  return (
    <div className="App">
      <h1>Party Invitation List</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
