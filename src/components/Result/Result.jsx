import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from 'components/Image';

class Result extends Component {
showImage = () => {
  const { imagenes } = this.props;
  if (imagenes.length === 0) return null;
  return (
    <div className="row col-12 p-5">
      {imagenes.map(imagen => (
        <Image
          imagen={imagen}
          key={imagen.id}
        />
      ))}
    </div>
  );
}

render() {
  return (
    <div className="container">
      {this.showImage()}
    </div>
  );
}
}

Result.propTypes = {
  imagenes: PropTypes.string.isRequired,
};

export default Result;
