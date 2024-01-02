import React from 'react';
import '../stylesheets/contador.css';

class Contador extends React.Component{
    render(){
        return(
            <div className='contador'>
                {this.props.numClics}
            </div>
        );
    };
}


export default Contador;