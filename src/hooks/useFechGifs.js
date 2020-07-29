import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";


 
export const useFechGifs = (category,limite) => {
    const [state, setState] = useState({
        data: [] ,
        loading: true 
    });
    useEffect(() => {
        getGifs(category, limite)
            .then(imgs=>{
                setState({
                    data: imgs,
                    loading: false
                }); 
                
                
            })
    }, [category,limite ])
   

    return state; //{data:[], loanding: true}; 
}
