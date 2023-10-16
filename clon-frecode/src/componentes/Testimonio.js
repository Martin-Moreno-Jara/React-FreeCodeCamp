import React from 'react';

function Testimonio(){
  return (
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src={require('../images/kdb.webp')}
      alt='El GOAT'/>

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-pais'>Kevin de Bruyne - Belgium</p>
        <p className='posicion'>Mediocampista ofensivo</p>
        <p className='honores'>1xChampions League, 5xPremier League</p>
      </div>

    </div>
  );
}
export default Testimonio;