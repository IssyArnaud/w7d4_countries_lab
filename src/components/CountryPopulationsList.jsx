import React from 'react'
import CountryPopulationsListItem from './CountryPopulationsListItem'

const CountryPopulationsList = ({countries, favCountries, onCountryClick, onFavClick}) => {

    const countriesByPopulation = countries.sort((a, b) => b.population - a.population)
    const listItems = countriesByPopulation.map((country, index) => {
            return (
                <CountryPopulationsListItem country={country} key={index} 
                onCountryClick={onCountryClick} onFavClick={onFavClick} favCountries={favCountries}/>
            )
        } )

    return (
        <div>
        <h2>Countries Ranked by Population</h2>
        <ul>
            {listItems}
        </ul>
        </div>
    )
}
export default CountryPopulationsList