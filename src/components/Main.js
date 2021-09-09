import data from "./data";
import React, { Component } from "react";
import Recordatorio from "./Recordatorio";
import Botones from "./Botones"

const historial = [];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
     contador: 1,
     actual: data[0],
     seleccionPrevia: "",
    };
    
  }
  
  clickHandler = (e) => {
   if((this.state.contador *2 ) >= data.length ){
      alert("fin")
   }else{
  const value = e.target.value;
  this.setState({actual: data.find(element => element.id === (this.state.contador +1) + value),contador: this.state.contador +1,
  seleccionPrevia:value.toUpperCase()}) 
  historial.unshift(value.toUpperCase())
   }
  
}
  render() {
    return (
     <div className="layout">
     <h1 className="historia">{this.state.actual.historia}</h1>
        <Botones clickHandler={this.clickHandler} actual={this.state.actual} 
           opcionA ={this.state.actual.opciones.a}
           opcionB ={this.state.actual.opciones.b}/>
     
       <Recordatorio seleccionPrevia={this.state.seleccionPrevia} historial = {historial.map(
            (e, index) => (
              <li key={index}>{e}</li>
            ),
            data[this.state.contador].id
          )}/>
      </div>
    )
  }
}


export default Main;
