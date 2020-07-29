import React from 'react'

export const SugerenciaCategory = ({setcategories,categories}) => {
    const auto='Auto';
    const Simpsons = 'Simpsons';
    const Libros = 'Libros';
    const Dragon = 'Dragon Ball';
    const Naruto = 'Naruto';
    const Cartoon = 'Cartoon';
    const handleAddA =()=>{
        const valor = categories.includes(auto);
            if(!valor === true){
              setcategories (cats => [auto,...cats  ]); 
            } 
    }
    const handleAddS =()=>{
        const valor = categories.includes(Simpsons);
            if(!valor === true){
              setcategories (cats => [Simpsons,...cats  ]); 
            } 
    }
    const handleAddD =()=>{
        const valor = categories.includes(Dragon);
            if(!valor === true){
              setcategories (cats => [Dragon,...cats  ]); 
            } 
    }
    const handleAddN=()=>{
        const valor = categories.includes(Naruto);
            if(!valor === true){
              setcategories (cats => [Naruto,...cats  ]); 
            } 
    }
    const handleAddC =()=>{
        const valor = categories.includes(Cartoon);
            if(!valor === true){
              setcategories (cats => [Cartoon,...cats  ]); 
            } 
    }
    const handleAddL =()=>{
        const valor = categories.includes(Libros);
            if(!valor === true){
              setcategories (cats => [Libros,...cats  ]); 
            } 
    }

    return (
        <>
        <h5>SUGERENCIAS:</h5><br></br>
            <div className="suger">
                <p id="sugerency" onClick={handleAddA}>{auto}</p> 
                <p id="sugerency" onClick={handleAddS}>{Simpsons}</p>
                <p id="sugerency" onClick={handleAddL}>{Libros}</p>
                <p id="sugerency" onClick={handleAddD}>{Dragon}</p> 
                <p id="sugerency" onClick={handleAddN}>{Naruto}</p>
                <p id="sugerency" onClick={handleAddC}>{Cartoon}</p>
            </div>
        </>
    )
}

export default SugerenciaCategory

