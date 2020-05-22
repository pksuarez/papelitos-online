import React from 'react';
import CargarExcel from './CargarExcel';
import XLSX from 'xlsx';


class FormularioInicial extends React.Component{
    
    state = {cantJudores: 2, selectedFile: null, nombres:[]};

    onInputChange = async (e) => {
        if (e.target.name =="jugadores"){
            this.setState({ cantJudores: e.target.value});
        }

        if (e.target.name =="cargarExcel"){
            console.log("excel load");
            await this.setState({ selectedFile: e.target.files[0]});
            this.cargarExcel();
        }
    }
    cargarExcel = () =>{
        if (this.state.selectedFile) {
            var fileReader = new FileReader();
            fileReader.onload = (event) => {
              var data = event.target.result;
              var workbook = XLSX.read(data, {
                type: "binary"
              });
                workbook.SheetNames.forEach( sheet => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(
                  workbook.Sheets[sheet]
                );
                //this.setState({nombres:rowObject.map(nombre => {
                  //  return nombre.Nombre})});
                 this.setState({nombres:rowObject})
                });
            };
            fileReader.readAsBinaryString(this.state.selectedFile);
          }
    }

    onCantidadSubmit = (e) => {
        e.preventDefault(); 
        this.props.onSubmit(this.state.cantJudores);
        this.props.onExcelLoad(this.state.nombres);
        console.log(this.state.nombres, "nombres en form")
    }

    render() {
        return(
            <div>
                <form className="ui form" onSubmit={this.onCantidadSubmit}>
                    <div className="field">
                        <label>Selecione el archivo de Excel</label>
                        <input className="ui" type="file" name="cargarExcel" accept=".xls,.xlsx" onChange={this.onInputChange} style={{width:'40%'}}/>
                    </div>

                    <div className="field">
                        <label>Cantidad de jugadores</label>
                        <input name="jugadores" value={this.state.cantJudores} type="number" min='2' max='6' onChange={this.onInputChange} style={{width:'20%'}}/>
                    </div>
                    <button className="ui button" type="submit">Confirmar</button>
                </form>
            </div>);
    }
}
export default FormularioInicial;