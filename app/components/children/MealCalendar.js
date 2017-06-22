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
        this.selectedCheckboxes = new Set();
  }

    constructor() {
    super();

    const selectedCheckboxes = new Set();
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }
    

  toggleCheckbox (label) {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
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

  handleClick (event) {
      //do something
  }

  render() {
    return (
        <div>
            <form>
                {this.createCheckboxes()}
                <button onClick = {this.handleClick}>Click Me!</button>
            </form>
        </div>
    );
  }

}

export default MealCalendar;
