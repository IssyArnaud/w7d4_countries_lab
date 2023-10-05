import React from 'react'

const TotalPopulation = ({countries}) => {
    const total = countries.reduce((accumulator, country) =>{return accumulator + country.population}, 0)
    return (
        <p>Total population of all countries: {total}</p>
    )
}
export default TotalPopulation