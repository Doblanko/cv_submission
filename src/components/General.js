import React, { Component } from 'react';

class GeneralEdit extends Component {
  constructor(props) {
    super(props);
  }

  static handleSubmit = (e, handleParentSubmit) => {
    e.preventDefault();
    handleParentSubmit('isGeneralEdit');
  };

  render() {
    const { handleParentSubmit, handleParentChange, info: { name, email, phone } } = this.props;
    return (
      <div id="general-info">
        <h2>Personal Info</h2>
        <form>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => this.handleInputChange(e, 'name')}
            />
          </label>
          <br />
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => this.handleInputChange(e, 'email')}
            />
          </label>
          <br />
          <label htmlFor="phone">
            Phone #:
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => this.handleInputChange(e, 'phone')}
            />
          </label>
          <br />
          <button type="submit" onClick={this.handleSubmit(handleParentSubmit)}>Submit</button>
        </form>
      </div>
    );
  }
}

export { GeneralEdit };
