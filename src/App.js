import React, { Component } from 'react';
import { GeneralEdit } from './components/General';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isGeneralEdit: true,
      isEducationEdit: true,
      isWorkEdit: true,
      info: {},
      education: {},
      work: {},
    };
  }

  static handleChange = (e) => {
    switch (section) {
      case 'General':
        break;
      case 'Education':
        break;
      case 'Work':
        break;
      default:
        break;
    }
  };

  handleSubmit = (valueName) => {
    this.setState((prevState) => ({ [valueName]: !prevState[valueName] }));
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

  handleEducationSubmit = (education) => {
    this.setState((prevState) => ({
      education: {
        name: education.name,
        title: education.title,
        date: education.date,
      },
      isEducationEdit: !prevState.EducationEdit,
    }));
  };

  handleWorkSubmit = (work) => {
    this.setState((prevState) => ({
      work: {
        company: work.name,
        title: work.title,
        tasks: work.tasks,
        start: work.start,
        end: work.end,
      },
      isWorkEdit: !prevState.WorkEdit,
    }));
  };

  render() {
    // destructuring
    const {
      isGeneralEdit, isEducationEdit, isWorkEdit, info, education, work,
    } = this.state;

    return (

      <div id="App">
        {
          isGeneralEdit
            ? <GeneralEdit handleSubmit={this.handleSubmit} change={this.handleChange} info={info} />
            : <GeneralDisplay handleSubmit={this.handleSubmit('isGeneralEdit')} info={info} />
        }
        {/* {
          isEducationEdit
            ? <EducationEdit handleSubmit={this.handleSubmit('isEducationEdit')} info={education} />
            : <EducationDisplay handleSubmit={this.handleSubmit('isEducationEdit')} info={education} />
        }
        {
          isWorkEdit
            ? <WorkEdit handleSubmit={this.handleSumit('isWorkEdit')} info={work} />
            : <WorkDisplay handleSubmit={this.handleSumit('isWorkEdit')} info={work} />
        } */}
      </div>

    );
  }
}

export default App;
