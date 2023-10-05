import React from 'react'
import CountryPopulationsListItem from './CountryPopulationsListItem'

const FavCountriesList = ({favCountries, onCountryClick}) => {

    const listItems = favCountries.map((country, index) => {
        return (
            <CountryPopulationsListItem country={country} key={index}
            onCountryClick={onCountryClick}/>
            )
        })

    return (
        <div>
            <h2>Your Favourite Countries</h2>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}
export default FavCountriesList