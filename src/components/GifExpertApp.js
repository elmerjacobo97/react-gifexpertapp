import React, {useState} from 'react';
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch']);

    // const handleAdd = () => {
    //
    //     // creamos una copia de las categories y añadimos una nueva
    //     setCategories([...categories, 'HunterXHunter']);
    //     // setCategories(cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <div className="contenedor">
            <h2 className="gif-app">GifExpertApp</h2>

            <AddCategory setCategories={setCategories} />

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </div>
    );
};

export default GifExpertApp;