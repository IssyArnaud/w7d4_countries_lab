import React from 'react';

const CountryDetails = ({country}) => {
    return (
        <section>
            <h2>{country.name.common}</h2>
            <ul>
                <li>Capital:{country.capital[0]} </li>
            </ul>
        </section>
    )
}
export default CountryDetails