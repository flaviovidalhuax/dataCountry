import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import CountriesCards from './componentes/CountriesCards'

function App() {
  const [count, setCount] = useState()

  const URL ='https://restcountries.com/v3.1/lang/spa'

  useEffect(() => {
    axios.get(URL)
    .then(  res =>  setCount(res.data))
    .catch( err => console.log(err))
  }, [])
  
console.log(count);

  return (
    <div className="App">
      <h1 className='title'>Information of country</h1>
      <div className='card-container'>
        {
        count?.map(country => (
        <CountriesCards
          key={country?.name.official}
          country={country}
        />

        ))
        }
      </div>
    </div>
  )
}

export default App
