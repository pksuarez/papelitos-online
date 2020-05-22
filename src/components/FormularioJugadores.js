import React from 'react';
import InputJugador  from './InputJugador';

class FormularioJugadores extends React.Component{
    
    state= {};
    
    onJugadorSubmit = (jugador,nombre) =>{
        this.setState({
            [jugador]:nombre}
        )
    };    

    generarInputsJugador = () => {
        let elementos = [];
        for (let i = 1; i<= this.props.cantidad; i++){
            let componenete = <InputJugador key={i} numero={i} onJugadorSubmit={this.onJugadorSubmit}/>
            elementos.push(componenete) ;
        }
        return elementos;
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        let arregloJugadores = Object.entries(this.state).map( function ([key, value]){return ({jugador:key,nombre:value, puntos:0})});
        this.props.onJugadoresSubmit(arregloJugadores);
    }




    render(){
        return(
            <div>
                <div class="ui warning message">
                    <i class="close icon"></i>
                    <div class="header">
                        Tiren los dardos y llenen los nombres en orden.
                    </div>
                </div>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    {this.generarInputsJugador()}
                    <button className="ui button" type="submit">Confirmar</button>
                </form>
            </div>
        );
    }

}

export default FormularioJugadores;