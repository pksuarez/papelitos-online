import React from 'react';
import Jugador  from './Jugador';
import Papelito from './Papelito';

class PantallaJuego extends React.Component{

    state={ronda:1, listasCreadas:false, subs:[]}

    onPuntosUpdate = (jugador) => {
       let actualizado = this.props.jugadores;

       for (let i = 0; i<actualizado.length; i++){
           if (actualizado[i].jugador == jugador){
               actualizado[i].puntos = actualizado[i].puntos + 1;
           }
       }
       this.props.onPuntosUpdate(actualizado);
    }

    crearJugadores = () => {
        return(
            this.props.jugadores.map((oJugador) => {
                return (
                    <Jugador key={oJugador.jugador} jugador={oJugador.jugador} nombre={oJugador.nombre} puntos={oJugador.puntos} onPuntosUpdate={this.onPuntosUpdate}/>
                )
            })
        )
    }


    crearSubListas = () => {
        let separadas = [];
        let revueltas = this.shuffle(this.props.nombres);
        let salto = revueltas.length/20;
        for (let i = 0; i<revueltas.length;i+=salto){
            separadas.push(revueltas.slice(i,i+salto));
        }
        console.log(separadas, "separadas");
        return separadas;
    }

    crearPapelitos = () =>{
        let arregloPapelitos = [];
        let sublistas = [];
        if(!this.state.listasCreadas){
             sublistas = this.crearSubListas();
             this.setState({listasCreadas:true, subs:sublistas})
             for (let i=1; i<=20; i++){
                let papelito = <Papelito numero={i} max={sublistas[i-1].length} nombres={sublistas[i-1]} ronda={this.state.ronda}/>
                arregloPapelitos.push(papelito);
            }
        }
        else{
            for (let i=1; i<=20; i++){
                let papelito = <Papelito numero={i} max={this.state.subs[i-1].length} nombres={this.state.subs[i-1]} ronda={this.state.ronda}/>
                arregloPapelitos.push(papelito);
            }
        }
        
        return arregloPapelitos;
    }


    shuffle = (a) => {
        let nuevo = [...a];
        for (let i = nuevo.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [nuevo[i], nuevo[j]] = [nuevo[j], nuevo[i]];
        }
        return nuevo;
    }

    onSiguienteClick = () => {
        this.setState({ronda:this.state.ronda+1});
    }

    render(){
        return(
            <div>
                <div className="ui horizontal segments">
                    {this.crearJugadores()}
                </div>

                <div className="ui horizontal segments">
                    {this.crearPapelitos()}
                </div>

                <div className="ui center aligned">
                    <button className="ui button" onClick={this.onSiguienteClick}>Siguiente Ronda</button>
                </div>

            </div>
        )
    }
}

export default PantallaJuego;
