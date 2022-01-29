import React, { Component } from 'react';
import GeneralEdit from './components/GeneralEdit';
import GeneralDisplay from './components/GeneralDisplay';
import EducationEdit from './components/EducationEdit';
import EducationDisplay from './components/EducationDisplay';
import WorkEdit from './components/WorkEdit';
import WorkDisplay from './components/WorkDisplay';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isGeneralEdit: true,
      isEducationEdit: true,
      isWorkEdit: true,
      info: {
        name: '',
        email: '',
        phone: '',
      },
      education: {
        school: '',
        degree: '',
        gradDate: '',
      },
      work: {
        company: '',
        position: '',
        description: '',
        startDate: '',
        endDate: '',
      },
    };
  }

  handleChange = (section, field, value) => {
    // setState cannot update nested objects directly
    this.setState((prevState) => {
      const property = prevState[section];
      property[field] = value;
      return property;
    });
  };

  handleSubmit = (valueName) => {
    this.setState((prevState) => ({ [valueName]: !prevState[valueName] }));
  };

  render() {
    // destructuring
    const {
      isGeneralEdit,
      isEducationEdit,
      isWorkEdit,
      info,
      education,
      work,
    } = this.state;
    return (
      <div id="App">
        {isGeneralEdit ? (
          <GeneralEdit
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            info={info}
          />
        ) : (
          <GeneralDisplay handleSubmit={this.handleSubmit} info={info} />
        )}
        {isEducationEdit ? (
          <EducationEdit
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            education={education}
          />
        ) : (
          <EducationDisplay
            handleSubmit={this.handleSubmit}
            education={education}
          />
        )}
        {isWorkEdit ? (
          <WorkEdit
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            work={work}
          />
        ) : (
          <WorkDisplay handleSubmit={this.handleSubmit} work={work} />
        )}
      </div>
    );
  }
}

export default App;
