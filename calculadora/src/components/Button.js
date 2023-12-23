import React from 'react';
import '../stylesheets/Button.css'

function Button (props){
    const isOperator = (value)=>{
        return isNaN(value) && (value !='.') && (value!='=');
    }
    return(
        <div 
        className={`button-container ${isOperator(props.children)? 'operador':''}`.trimEnd()} onClick={()=>props.write(props.children)}>
            {props.children}    
        </div>
    );
}

export default Button;