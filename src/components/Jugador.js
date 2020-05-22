import React from 'react';

class Jugador extends React.Component{

    state = {}


    onButtonClick = (e) => {
        this.props.onPuntosUpdate(this.props.jugador);
    }

    render(){
        return(
            <div className="ui segment">
                <label>{this.props.nombre}</label>
                <p>Puntos: {this.props.puntos}</p>
                <button className="ui button" onClick={this.onButtonClick}>Agregar Punto</button>
            </div>
        )
    }

}

export default Jugador;