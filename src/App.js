import HouseCombo from './HouseCombo.jsx'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [ houses, setHouses ] = useState([])
  const [ house, setHouse ] = useState(null)

useEffect(() => {
  getHouses()
}, [])

const getHouses = () => {
  fetch('https://wizard-world-api.herokuapp.com/Houses')
    .then(res => res.json())
    .then(data => setHouses(data))
}

function handleClick(houseObj){
  setHouse(houseObj)
}
  
return(
  <div className="App">
    <h1 className='potter'>Houses of Harry Potter!</h1>
    {houses.map((house)=>(
      <button onClick={() => handleClick(house)}>{house.name}</button>
    ))}
    {house && <HouseCombo house={house} />}
  </div>
)
}

export default App;