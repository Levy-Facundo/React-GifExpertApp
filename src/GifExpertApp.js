import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import {SugerenciaCategory} from './components/SugerenciaCategory';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = ()=>{

    
    const [categories, setcategories] = useState(['Marvel']);
    
    return (
        <div >
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories} categories={categories}/>
            <hr />
            <SugerenciaCategory  setcategories={setcategories} categories={categories}/> 
            <hr />
            
            
            <ol>
                { 
                    categories.map(category=> (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))

                }
            </ol>
            
        </div>
    )
}
export default GifExpertApp;