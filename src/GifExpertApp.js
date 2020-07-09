import React, { Fragment, useState } from 'react'

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const categoriesArr = ['One Punch'];

    const [categories, setCategories] = useState(categoriesArr);

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ul>
            {
                categories.map((category) => (
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))
            }
            </ul>
        </Fragment>
    )
}

export default GifExpertApp
