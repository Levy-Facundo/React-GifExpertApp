import React, { useState } from 'react';
import { GifGridItem } from './GifGridItem';
import { useFechGifs } from '../hooks/useFechGifs';


export const GifGrid = ({category}) => {
    
    const [limite, setlimite] = useState(12)
    const moreGif = ()=>{
        setlimite(20);
        
    }
    const {data:images,loading} = useFechGifs(category,limite);
  
    
    return (
        <>
            <h3 className="animate__animated animate__rubberBand">{category}</h3>
            {loading && <p className="animate__animated animate__flash" >Loading</p>}
            {<div className="card-grid">
                {
                    images.map( img  =>(
                        <GifGridItem 
                            key={img.id}
                            {...img} 
                        />
                    ))
                }
            </div>}
            <button onClick={ moreGif }>More..</button>
        </>
    )
}
