import React from 'react'

export const SugerenciaCategory = ({setcategories}) => {
    const auto='Auto';
    const Simpsons = 'Simpsons';
    const Libros = 'Libros';
    const handleAddA =()=>{
        setcategories (cats => [auto, ...cats]);
    }
    const handleAddS =()=>{
        setcategories (cats => [Simpsons,...cats ]);
    }
    const handleAddL =()=>{
        setcategories (cats => [Libros,...cats  ]);
    }
    return (
        <>
        <h5>SUGERENCIAS:</h5><br></br>
            <div className="suger">
                <p id="sugerency" onClick={handleAddA}>{auto}</p> 
                <p id="sugerency" onClick={handleAddS}>{Simpsons}</p>
                <p id="sugerency" onClick={handleAddL}>{Libros}</p>
            </div>
        </>
    )
}

export default SugerenciaCategory
