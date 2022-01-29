import React, { Component } from 'react';

class GeneralEdit extends Component {
  static handleChange = (handleParentChange, field, value) => {
    handleParentChange('info', field, value);
  };

  static handleSubmit = (e, handleParentSubmit) => {
    e.preventDefault();
    handleParentSubmit('isGeneralEdit');
  };

  render() {
    const {
      handleSubmit: handleParentSubmit,
      handleChange: handleParentChange,
      info: { name, email, phone },
    } = this.props;
    return (
      <div id="general-info">
        <h2>Personal Info</h2>
        <form>
          <label htmlFor="name">
            Name:
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) =>
                GeneralEdit.handleChange(
                  handleParentChange,
                  'name',
                  e.target.value
                )
              }
            />
          </label>
          <br />
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="text"
              name="email"
              value={email}
              onChange={(e) =>
                GeneralEdit.handleChange(
                  handleParentChange,
                  'email',
                  e.target.value
                )
              }
            />
          </label>
          <br />
          <label htmlFor="phone">
            Phone #:
            <input
              id="phone"
              type="text"
              name="phone"
              value={phone}
              onChange={(e) =>
                GeneralEdit.handleChange(
                  handleParentChange,
                  'phone',
                  e.target.value
                )
              }
            />
          </label>
          <br />
          <button
            type="submit"
            onClick={(e) => GeneralEdit.handleSubmit(e, handleParentSubmit)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default GeneralEdit;
