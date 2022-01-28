import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isGeneralEdit: true,
      isEducationEdit: true,
      isSkillEdit: true,
      info: {
        name: '',
        email: '',
        phone: '',
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleGeneralSubmit = (info) => {
    this.setState((prevState) => ({
      info: {
        name: info.name,
        email: info.email,
        phone: info.phone,
      },
      isGeneralEdit: !prevState.GeneralEdit,
    }));
  };

  render() {
    // destructuring
    const { isGeneralEdit, isEducationEdit, isSkillEdit } = this.state;

    return (

      <div id="App">
        {isGeneralEdit
          ? <GeneralEdit submit={this.handleGeneralSubmit} info={this.state.info} />
          : <GeneralDisplay submit={() => this.toggleEdit('isGeneralEdit')} info={this.state.info} />}
      </div>

    );
  }
}

export default App;
