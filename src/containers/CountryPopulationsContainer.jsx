import React, { useState, useEffect } from 'react'
import CountryPopulationsList from '../components/CountryPopulationsList'
import TotalPopulation from '../components/TotalPopulation'
import CountryDetails from '../components/CountryDetails'
import FavCountriesList from '../components/FavCountriesList'
import './CountryPopulationsContainer.css'

const CountriesContainer = () => {
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favCountries, setFavCountries] = useState([]) 

    useEffect(() => {
        getCountries()
    }, [])

    const getCountries = function() {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountryClick = (country) => {
        setSelectedCountry(country)
    }

    const onFavClick = (country) => {
        setFavCountries([...favCountries, country])
    }

    // const inFavCountries = (country) => {favCountries.includes(country)}
    // const anyFavs = (favCountries) => {favCountries.length !== 0}

    return (
        <section>
        <h1>Countries of the World</h1>
        <TotalPopulation countries={countries}/>
        <div className='panel'>
        <CountryPopulationsList countries={countries} favCountries={favCountries}
        onCountryClick={onCountryClick} onFavClick={onFavClick}/>
        <FavCountriesList favCountries={favCountries}/>
        {selectedCountry ? <CountryDetails country={selectedCountry}/> : null}
        </div>
        </section>
    )
}

export default CountriesContainer