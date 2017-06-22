import React from 'react';
import Checkbox from './Checkbox';

const week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

class MealCalendar extends React.Component {
    
    componentWillMount () {
        this.selectedCheckboxes = [];
  }

    constructor() {
    super();

    const selectedCheckboxes = [];
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }
    

  toggleCheckbox (label) {
    if (this.selectedCheckboxes.includes(label)) {
      let index = this.selectedCheckboxes.indexOf(label);
      this.selectedCheckboxes.splice(index, 1);
    } else {
      this.selectedCheckboxes.push(label);
    }
  }

    
  

  createCheckbox (label) {
        return <Checkbox label={label} key={label} toggleCheck={this.toggleCheckbox} />;
  }

  createCheckboxes () {
      return week.map((day) => {
          return this.createCheckbox(day);
      });
  }

  handleSubmitForm (event) {
      event.preventDefault();

      //******API CALL GOES HERE******
      //...OR WE MAY HAVE TO SET UP THE 'ACTION' AND 'METHOD' ATTRIBUTES IN THE FORM ELEMENT ON LINE-62 BELOW 
      alert(this.selectedCheckboxes);
  }

  render() {
    return (
        <div>
            <h1>For What Days Do You Want Meals?</h1>
            <h3>Check the boxes below</h3>
            <form onSubmit = {this.handleSubmitForm}>
                {this.createCheckboxes()}
                <input 
                    value='Get Meal Plan'
                    type='submit'/>
            </form>
        </div>
    );
  }

}

export default MealCalendar;
