import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({setcategories, categories}) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e)=>{
        setinputValue(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            const valor = categories.includes(inputValue);
            if(!valor === true){
              setcategories (cats => [inputValue,...cats  ]);
                setinputValue('');  
            } 
            if(valor === true){
                setinputValue('');
            }
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
           {/*  <h1>{inputValue}</h1> */}
            <input 
                type="text"
                placeholder='Agregar una categoria'
                value={inputValue}
                onChange={handleInputChange}
               

            />
        </form>
    )
}
AddCategory.propTypes={
    setcategories: PropTypes.func.isRequired
}
