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
              { !this.state.hasMeals ? <MealsCalendar getMyMeal={ this.props.getMyMeal } meal={ this.props.meal } show={ this.props.show } hideModal={ this.props.hideModal } /> : <DaySelection /> }
            </div>
        )
    }

}

export default CentralPage;

// meal={this.state.meal} show={this.state.show} hideModal={this.hideModal}