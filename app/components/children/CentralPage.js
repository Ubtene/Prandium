import React from 'react';
import MealsCalendar from './MealsCalendar';
import DaySelection from './DaySelection';



class CentralPage extends React.Component {
    constructor() {
        super();
        this.state = {
            hasMeals: false
        };
    }

    render() {
        return (
            <div className='central-page'>
                {!this.state.hasMeals? <MealsCalendar /> : <DaySelection /> }
            </div>
        )
    }

}

export default CentralPage;
