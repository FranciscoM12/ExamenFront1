import React, { Component } from "react";

class Botones extends Component {
  render() {
    return (
        <div className="opciones">
        <div className="opcion">
          <button value="a" className="botones" onClick={this.props.clickHandler}>
            A
          </button>
          <h2>{this.props.opcionA}</h2>
        </div>
        <div className="opcion">
          <button value="b" className="botones" onClick={this.props.clickHandler}>
            B
          </button>
          <h2>{this.props.opcionB}</h2>
        </div>
        </div>
    );
  }
}

export default Botones;