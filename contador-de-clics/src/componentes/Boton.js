import React from 'react';
import '../stylesheets/boton.css'

function Boton({texto,isClicButton,manejarClic}){
    return(
        <button 
        className={isClicButton ? 'boton-clic': 'boton-reiniciar'}
        onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default Boton;