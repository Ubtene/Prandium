import React from "react";
import Day from './Day.js';
import Yelp from './Yelp';
// import ExpandedMeal from './ExpandedMeal';
const MyModal = require('./Modal');

const week = [
  {
    dayName: "Sunday",
    meals: {
      breakfast: "breakfast",
      lunch: "Ham Sandwich",
      dinner: "dinner"
    },
    ingredients: {
      ingredients: "Ea velit ad occaecat ipsum.",
      ingredientsImg: "some image"
    },
    instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
  },
  {
    dayName: "Monday",
    meals: {
      breakfast: "breakfast",
      lunch: "Lasagna",
      dinner: "dinner"
    },
    ingredients: {
      ingredients: "Ea velit ad occaecat ipsum.",
      ingredientsImg: "some image"
    },
    instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
  },
  {
    dayName: "Tuesday",
    meals: {
      breakfast: "breakfast",
      lunch: "Soup",
      dinner: "dinner"
    },
    ingredients: {
      ingredients: "Ea velit ad occaecat ipsum.",
      ingredientsImg: "some image"
    },
    instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
  },
  {
    dayName: "Wednesday",
    meals: {
      breakfast: "breakfast",
      lunch: "Tacos",
      dinner: "dinner"
    },
    ingredients: {
      ingredients: "Ea velit ad occaecat ipsum.",
      ingredientsImg: "some image"
    },
    instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
  },
  {
    dayName: "Thursday",
    meals: {
      breakfast: "breakfast",
      lunch: "Spaghetti",
      dinner: "dinner"
    },
    ingredients: {
      ingredients: "Ea velit ad occaecat ipsum.",
      ingredientsImg: "some image"
    },
    instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
  },
  {
    dayName: "Friday",
    meals: {
      breakfast: "breakfast",
      lunch: "Chicken Salad",
      dinner: "dinner"
    },
    ingredients: {
      ingredients: "Ea velit ad occaecat ipsum.",
      ingredientsImg: "some image"
    },
    instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
  },
  {
    dayName: "Saturday",
    meals: {
      breakfast: "breakfast",
      lunch: "Sushi",
      dinner: "dinner"
    },
    ingredients: {
      ingredients: "Ea velit ad occaecat ipsum.",
      ingredientsImg: "some image"
    },
    instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
  }
];

class MealsCalendar extends React.Component {
  constructor() {
    super();
    this.state = {
      Sunday: '',
      Monday: '',
      Tuesday: '',
      Wednesday: '',
      Thursday: '',
      Friday: '',
      Saturday: '',
      myMeal: {},
      count: 0
    };

    this.createDay = this.createDay.bind(this);

  }

  createDay() {


    return week.map((day, i) => {

      return (
        <div 
          key={ i } 
          className="col-sm-3" 
          onClick={ () => this.props.getMyMeal(day.dayName, day.meals.lunch, day.ingredients.ingredientsImg, day.ingredients.ingredients) }>
        <Day 
          key={ i } 
          day={ day.dayName } 
          breakfast={ day.meals.breakfast } 
          lunch={ day.meals.lunch } 
          dinner={ day.meals.dinner } 
          ingredients={ day.ingredients.ingredients }
          ingredientsImg={ day.ingredientsImg } 
          instructions={ day.instructions } />
        </div>
        );
    })
  }

  render() {
    return (
      <div className="calendar-wrapper">
        <div className="row">
          <MyModal meal={ this.props.meal } show={ this.props.show } hideModal={ this.props.hideModal } />
        </div>
        <div className="row">
          { this.createDay() }
        </div>
        <div>
        </div>
        <div id="yelpInMeals" className="row">
          <Yelp />
        </div>
      </div>
      );
  }
}

export default MealsCalendar;