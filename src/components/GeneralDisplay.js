/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class GeneralDisplay extends Component {
  static handleSubmit = (e, handleParentSubmit) => {
    e.preventDefault();
    handleParentSubmit('isGeneralEdit');
  };

  render() {
    const {
      handleSubmit: handleParentSubmit,
      info: { name, email, phone },
    } = this.props;

    return (
      <div>
        <h2>{name}</h2>
        <p>
          Email: {email} -- Phone: {phone}
        </p>
        <button
          type="submit"
          onClick={(e) => GeneralDisplay.handleSubmit(e, handleParentSubmit)}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default GeneralDisplay;
