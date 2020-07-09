import React, { useState } from 'react'
import PropsTypes from 'prop-types';

function AddCategory({ setCategories }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( !inputValue ) {
            return;
        }

        setCategories((cats) => [inputValue, ...cats]);
        setInputValue('');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropsTypes.func.isRequired
}


export default AddCategory;
