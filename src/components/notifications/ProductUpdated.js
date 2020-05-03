import React from 'react'

const ProductUpdated = ({ id, attributes }) => {
    return (
        <>
            Product with id of {id} has been updated to:
            <ul>
                {Object.keys(attributes).map(key => <li key={key}>{key}: {String(attributes[key])}</li>)}
            </ul>
        </>
    )
}

export default ProductUpdated