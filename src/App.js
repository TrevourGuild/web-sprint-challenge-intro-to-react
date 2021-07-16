import React, {useState, useEffect} from 'react'
import './App.css'
import Character from './components/Character'
import Details from './components/Details'
import axios from 'axios'



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  const [characters, setCharacters] = useState([])
  const [currentCharIndex, setCurrentCharIndex] = useState(null)

  const openDetails = id => {
    setCurrentCharIndex(id)
  }

  const closeDetails = () => {
    setCurrentCharIndex(null)
  }



  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
      .then(res => {
        setCharacters(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {
        characters.map(ch =>{
          return <Character key={ch.name} info={ch} action={openDetails}/>
        })
      }
      {
        currentCharIndex && <Details  characterId = {setCurrentCharIndex} close ={closeDetails}/>
      }
    </div>
  );
}

export default App;
