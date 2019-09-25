import React from 'react';
import PropTypes from 'prop-types';

const Imagen = (props) => {
  const { imagen } = props;
  const {
    previewURL,
    views,
    largeImageURL,
    tags,
    likes,
  } = imagen;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">
            {views}
            Views
          </p>
          <p className="card-text">
            {likes}
            Likes
          </p>
          <a href={largeImageURL} className="btn btn-primary btn-block"> View Image </a>
        </div>
      </div>
    </div>
  );
};

Imagen.propTypes = {
  imagen: PropTypes.shape({
    previewURL: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
  }).isRequired,
};

export default Imagen;
