import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Finder extends Component {
  finderRef = React.createRef();

  handleData = (e) => {
    e.preventDefault();
    const term = this.finderRef.current.value;
    const finder = this.props;

    finder.dataFinder(term);
  }

  render() {
    return (
      <form onSubmit={this.handleData}>
        <div className="row mt-0">
          <div className="form-group col-md-8">
            <input className="form-control form-control-lg" ref={this.finderRef} type="text" placeholder="Find your photograph" />
          </div>
          <div>
            <input className="form-group col-md-4 btn btn-block btn-lg btn-danger" type="submit" value="Click here" />
          </div>
        </div>
      </form>
    );
  }
}

Finder.propTypes = {
  dataFinder: PropTypes.string.isRequired,
};

export default Finder;
