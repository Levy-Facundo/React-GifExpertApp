import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({setcategories}) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e)=>{
        setinputValue(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setcategories (cats => [inputValue,...cats  ]);
            setinputValue('');
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1>
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
