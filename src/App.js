import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',

    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      name: '',
    });
  };

  render() {
    // destructuring
    const { name } = this.state;

    return (
      <div id="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nameInput">
            Name
            <input
              id="nameInput"
              type="text"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit General Info</button>
        </form>
      </div>

    );
  }
}

export default App;
