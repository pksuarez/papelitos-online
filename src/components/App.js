import React from 'react';
import FormularioInicial from './FormularioInicial';
import FormularioJugadores from './FormularioJugadores';
import PantallaJuego from './PantallaJuego';


class App extends React.Component{
    
    state = {cantidadJugadores: '', nombres: [], jugadores:[]}

    onCantidadSubmit = async (cantidad) => {
        await this.setState({ cantidadJugadores: cantidad });
    }

    onExcelLoad = async (nombres) => {
        let enArreglo = nombres.map((nombre) =>{
            return nombre.Nombre;
        })

        await this.setState({nombres:enArreglo});
        console.log(this.state.nombres, "en app ");
    }

    onJugadoresSubmit = (jugadores) =>{
        this.setState({jugadores});
    }

    onPuntosUpdate = (actualizado) => {
        this.setState({jugadores:actualizado});
    }

    renderComponents = () => {
        if (this.state.cantidadJugadores === '' || this.state.nombres.length === 0){
            return (
                <div>
                    <FormularioInicial onExcelLoad={this.onExcelLoad} onSubmit={this.onCantidadSubmit}/>
                </div>
            )
        }
        else{
            if (this.state.jugadores.length === 0){
                return(
                    <FormularioJugadores cantidad={this.state.cantidadJugadores} onJugadoresSubmit={this.onJugadoresSubmit}/>
                    )
            }
            else{
                let jugador = this.state.jugadores[0];
                return(
                    <PantallaJuego nombres={this.state.nombres} jugadores={this.state.jugadores} onPuntosUpdate={this.onPuntosUpdate}/>

                )
            }
                    
        }
    }

    crearPapelitos = () =>{
        console.log(this.state.nombres);
        return (
            this.state.nombres.map((nombre)=>{
                return(
                <h3 key={nombre.__rowNum__}>{nombre.Nombre}</h3>
                )
            })
        )
    }
    
    
    render(){
        return(
            <div className="ui container" style={{marginTop: '10px', width: '100%'}}>
                <div className="ui center aligned segment">
                    <h1>Papelitos</h1>
                    {this.renderComponents()}
                </div>

            </div>
        )
    }
}

export default App;


