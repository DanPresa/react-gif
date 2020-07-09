import React from 'react'

const GifGridItem = ({ title, url }) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img alt={ title } src={ url } />
            <p><b>{ title }</b></p>
        </div>
    )
}

export default GifGridItem
