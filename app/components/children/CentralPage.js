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

    mealCheck () {

        // Do axios call to see if user has meal plan
        //Get user data and if 'data.mealsForTheWeek's length is 0 then set state to false
        //otherwise set it to true

        if (mealPlan) {
            this.setState({hasMeals:true});
        }
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
