import React, { Component } from 'react';

class WorkEdit extends Component {
  static handleChange = (handleParentChange, field, value) => {
    handleParentChange('work', field, value);
  };

  static handleSubmit = (e, handleParentSubmit) => {
    e.preventDefault();
    handleParentSubmit('isWorkEdit');
  };

  render() {
    const {
      handleSubmit: handleParentSubmit,
      handleChange: handleParentChange,
      work: { company, position, description, startDate, endDate },
    } = this.props;
    return (
      <div id="skills-info">
        <h2>Skills</h2>
        <form>
          <label htmlFor="company-name">
            Company:
            <input
              type="text"
              id="company-name"
              name="company-name"
              value={company}
              onChange={(e) =>
                WorkEdit.handleChange(
                  handleParentChange,
                  'company',
                  e.target.value
                )
              }
            />
          </label>
          <br />
          <label htmlFor="position-title">
            Position:
            <input
              type="text"
              id="position-title"
              name="position-title"
              value={position}
              onChange={(e) =>
                WorkEdit.handleChange(
                  handleParentChange,
                  'position',
                  e.target.value
                )
              }
            />
          </label>
          <br />
          <label htmlFor="position-description">
            Tasks:
            <input
              type="text"
              id="position-description"
              name="position-description"
              value={description}
              onChange={(e) =>
                WorkEdit.handleChange(
                  handleParentChange,
                  'description',
                  e.target.value
                )
              }
            />
          </label>
          <br />
          <label htmlFor="start-date">
            Start Date:
            <input
              type="date"
              id="start-date"
              name="start-date"
              value={startDate}
              onChange={(e) =>
                WorkEdit.handleChange(
                  handleParentChange,
                  'startDate',
                  e.target.value
                )
              }
            />
          </label>
          <br />
          <label htmlFor="end-date">
            Leave Date:
            <input
              type="date"
              id="end-date"
              name="end-date"
              value={endDate}
              onChange={(e) =>
                WorkEdit.handleChange(
                  handleParentChange,
                  'endDate',
                  e.target.value
                )
              }
            />
          </label>
          <br />
          <button
            type="submit"
            onClick={(e) => WorkEdit.handleSubmit(e, handleParentSubmit)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default WorkEdit;
