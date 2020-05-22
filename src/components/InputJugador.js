import React from 'react';

class InputJugador extends React.Component{
    state = {nombre:''}

    onInputChange = async (e) => {
        await this.setState({nombre: e.target.value});
        let jugador = `jugador ${this.props.numero}`
        this.props.onJugadorSubmit(jugador,this.state.nombre);
    }


    render(){
        return(
            <div className="field">
                <label>Jugador {this.props.numero}</label>
                <input className="ui input" value={this.state.nombre} type="text" style={{width:'40%'}} onChange={this.onInputChange}/>
            </div>
        )
    }

}

export default InputJugador;