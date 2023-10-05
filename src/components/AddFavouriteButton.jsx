import React from 'react'

const AddFavButton = ({country, onFavClick}) => {
    return (
        <button onClick={() => onFavClick(country)}>Add favourite</button>
    )
}
export default AddFavButton