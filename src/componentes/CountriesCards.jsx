import React from 'react'

const CountriesCards = ({country}) => {
  return (
    <article className='Card_Each-data'>
        <img src={country.flags.svg} alt="" />
        <h2>{country.name.common}</h2>
        <ul>
          <li><span className='Card_spam'>Capital: </span>{country.capital[0]}</li>
          <li><span className='Card_spam'>Population:  </span>{country.population}</li>
          <li><span className='Card_spam'>Countinet: </span>{country.continents[0]}</li>
          <li><span className='Card_spam'>Area: </span>{country.area} m2</li>
        </ul>

    </article>

  )
}

export default CountriesCards
/* 
bandera
pais
capital
cantidad de habitantes
area que ocupa
*/