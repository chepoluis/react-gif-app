import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function GifExpertApp(props) {
    const [categories, setCategories] = useState(['One Piece']);
    // const categories = ['One Piece', 'Halo'];

    // const handleAdd = () => {
        // setCategories([...categories, 'Death Note']);
        
        // Otra manera de agregar un elemento
        // cate es el estado actual del array (useState) = ['One Piece', 'Halo']
        // setCategories( cate => [...cate, 'Dragon Ball'] );

        // Agregar al incicio del array
        // setCategories(['Death Note', ...categories]);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => { // Warning: no es recomendable utilizar el indice del array como "key"
                                                  // porque el array se puede modificar y los indices ya no corresponderan al elemento en el que estaba
                        return (
                            // <li key={ category }>{ category }</li>
                            <GifGrid 
                                key={ category }
                                category={ category } 
                            />
                        )
                    })
                }
            </ol>
        </div>
    );
}

export default GifExpertApp;