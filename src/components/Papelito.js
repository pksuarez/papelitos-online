import React from 'react';

class Papelito extends React.Component{
    constructor(props) {
        super(props);
        this.state = {actual: 0, rondaActual:1, nombre:true, estiloNombre:{display:"none",}, estiloPepelito:{background:"white",cursor:"pointer"}}

    }

    onNumberClick = () =>{
        this.setState({estiloNombre:{display:"block"}})
    }

    componentDidUpdate(prevProps){
        if (prevProps.ronda !== this.props.ronda)
                if (Object.values(this.state.estiloNombre) == "block"){ //validacion para modificar unicamente los selecionados   
                    let nuevoActual = this.state.actual + 1;
                    this.setState({actual:nuevoActual,estiloNombre:{display:"none"}});
                    if(nuevoActual >= this.props.max) //validar si ya salieron todos los nombres
                        this.setState({estiloPepelito:{background:"red",cursor:"not-allowed"}    });
                }   
    }


    render(){
        return(
            <div style={this.state.estiloPepelito} className="ui segment" onClick={this.onNumberClick}>
                <p>{this.props.numero}</p>
                <p style={this.state.estiloNombre}>{this.props.nombres[this.state.actual]}</p>
            </div>
        )
    }

}

export default Papelito;