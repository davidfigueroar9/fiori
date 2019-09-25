import React, { Component } from 'react';
import Finder from 'components/Finder';
import Result from 'components/Result';

class Busqueda extends Component {
  state ={
    term: '',
    imagenes: [],
  }

  consultarApli = () => {
    const { term } = this.state;
    const url = `https://pixabay.com/api/?key=13723578-39895a7c691ba34a7770a5f3a&q=${term}`;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }));
  }

  dataFinder = (term) => {
    this.setState({
      term,
    }, () => {
      this.consultarApli();
    });
  }

  render() {
    const { imagenes } = this.state;
    return (
      <div className="Whislist">
        <div className="row justify-content-center">
          <Finder
            dataFinder={this.dataFinder}
          />
        </div>
        <div className="row justify-content-center">
          <Result
            imagenes={imagenes}
          />
        </div>
      </div>
    );
  }
}

export default Busqueda;
