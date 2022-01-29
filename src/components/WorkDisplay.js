/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class WorkDisplay extends Component {
  static handleSubmit = (e, handleParentSubmit) => {
    e.preventDefault();
    handleParentSubmit('isWorkEdit');
  };

  render() {
    const {
      handleSubmit: handleParentSubmit,
      work: { company, position, description, startDate, endDate },
    } = this.props;

    return (
      <div>
        <h2>Work History</h2>
        <h3>{company}</h3>
        <p>
          Job Title: {position} -- Start Date: {startDate} - End Date: {endDate}
        </p>
        <p>Description: {description}</p>
        <button
          type="submit"
          onClick={(e) => WorkDisplay.handleSubmit(e, handleParentSubmit)}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default WorkDisplay;
