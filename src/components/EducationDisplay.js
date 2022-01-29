/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class EducationDisplay extends Component {
  static handleSubmit(e, handleParentSubmit) {
    e.preventDefault();
    handleParentSubmit('isEducationEdit');
  }

  render() {
    const {
      handleSubmit: handleParentSubmit,
      education: { school, degree, gradDate },
    } = this.props;
    return (
      <div>
        <h2>Education</h2>
        <h3>{school}</h3>
        <p>
          Study: {degree} -- Grad Date: {gradDate}
        </p>
        <button
          type="submit"
          onClick={(e) => EducationDisplay.handleSubmit(e, handleParentSubmit)}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default EducationDisplay;
