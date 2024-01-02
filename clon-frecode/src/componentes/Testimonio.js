import React from 'react';
import '../stylesheets/testimonio.css'

class Testimonio extends React.Component{
  render(){
    return(
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src={require(`../images/${this.props.imagen}`)}
      alt={`Foto de ${this.props.nombre}`}/>

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-pais'>
          {this.props.nombre} - {this.props.pais}
          </p>
        <p className='posicion'>{this.props.posicion}</p>
        <p className='equipo'>
          <strong>{this.props.equipo} </strong>
        </p>
        <p className='honores'>{this.props.honores}</p>
      </div>

    </div>
    );

  }  
}
export default Testimonio;

