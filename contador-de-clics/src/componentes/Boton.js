import React from 'react';
import '../stylesheets/boton.css'

class Boton extends React.Component{
    render(){
        return(
            <button 
            className={this.props.isClicButton ? 'boton-clic': 'boton-reiniciar'}
            onClick={this.props.manejarClic}>
                {this.props.texto}
            </button>
        )
    };
}


export default Boton;