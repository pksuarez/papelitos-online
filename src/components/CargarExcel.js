import React from 'react';
import XLSX from 'xlsx';

class CargarExcel extends React.Component{
    state = {selectedFile: null, nombres: [] }

    onInputChange = async e =>{
        await this.setState({ selectedFile: e.target.files[0]});
        await this.cargarExcel();
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

    onUploadExcel = () =>{
        console.log(this.state.nombres, "nombres en cargar");
        this.props.onExcelLoad(this.state.nombres);
    }

    render(){
        return(
            <div className="field">
                <label>Selecione el archivo de Excel</label>
                <input className="ui" type="file" name="cargarExcel" accept=".xls,.xlsx" onChange={this.onInputChange} style={{width:'40%'}}/>
                <button className="ui button" type="button" onClick={this.onUploadExcel}>Cargar archivo</button>
            </div>
        );

    }
}

export default CargarExcel;