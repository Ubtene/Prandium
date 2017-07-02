import React from 'react';
import MealsCalendar from './MealsCalendar';
import DaySelection from './DaySelection';
import Mealsnew from './Mealsnew';


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
                {!this.state.hasMeals? <MealsCalendar getMyMeal={this.props.getMyMeal} /> : <DaySelection /> }
            </div>
        )
    }

}

export default CentralPage;