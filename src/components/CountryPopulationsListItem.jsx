import React from 'react'
import AddFavButton from './AddFavouriteButton'

const CountryPopulationsListItem = ({country, index, onCountryClick, onFavClick}) => {

    return (
        <>
        <li key={index} onClick={() => onCountryClick(country)}>
            {country.name.common}, population:{country.population}
            <AddFavButton country={country} onFavClick={onFavClick}/>
        </li>
        </>
    )
}
export default CountryPopulationsListItem