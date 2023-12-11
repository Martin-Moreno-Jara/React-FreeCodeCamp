import React from 'react';
import '../stylesheets/testimonio.css'

export function Testimonio(props){
  return (
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src={require(`../images/${props.imagen}`)}
      alt='El GOAT'/>

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-pais'>{props.nombre} - {props.pais}</p>
        <p className='posicion'>{props.posicion}</p>
        <p className='equipo'>
          <strong>{props.equipo}  </strong>
        </p>
        <p className='honores'>{props.honores}</p>
      </div>

    </div>
  );
}
