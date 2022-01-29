import React, { Component } from 'react';

class EducationEdit extends Component {
  static handleChange = (handleParentChange, field, value) => {
    handleParentChange('education', field, value);
  };

  static handleSubmit = (e, handleParentSubmit) => {
    e.preventDefault();
    handleParentSubmit('isEducationEdit');
  };

  render() {
    const {
      handleSubmit: handleParentSubmit,
      handleChange: handleParentChange,
      education: { school, degree, gradDate },
    } = this.props;
    return (
      <div id="education-info">
        <h2>Education</h2>
        <form>
          <label htmlFor="school-name">
            School:
            <input
              type="text"
              id="school-name"
              name="school-name"
              value={school}
              onChange={(e) =>
                EducationEdit.handleChange(
                  handleParentChange,
                  'school',
                  e.target.value
                )
              }
            />
          </label>
          <br />
          <label htmlFor="degree">
            Study:
            <input
              type="text"
              id="degree"
              name="degree"
              value={degree}
              onChange={(e) =>
                EducationEdit.handleChange(
                  handleParentChange,
                  'degree',
                  e.target.value
                )
              }
            />
          </label>
          <br />
          <label htmlFor="school-gradDate">
            Grad Date:
            <input
              type="date"
              id="school-gradDate"
              name="school-gradDate"
              value={gradDate}
              onChange={(e) =>
                EducationEdit.handleChange(
                  handleParentChange,
                  'gradDate',
                  e.target.value
                )
              }
            />
          </label>
          <br />
          <button
            type="submit"
            onClick={(e) => EducationEdit.handleSubmit(e, handleParentSubmit)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default EducationEdit;
