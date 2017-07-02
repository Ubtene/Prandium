import React from "react";
import Daynew from './Daynew';
import Yelp from './Yelp';

import { Button, Collapse, Well } from 'react-bootstrap';
    const week = [
      {
        dayName: "Sunday",
        meals: {
          breakfast: "breakfast",
          lunch: "lunch",
          dinner: "dinner"
        },
        ingredients: {
          ingredients: "Ea velit ad occaecat ipsum.",
          ingredientsImg: "some image"
        },
        instructions:
          "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
      },
      {
        dayName: "Monday",
        meals: {
          breakfast: "breakfast",
          lunch: "lunch",
          dinner: "dinner"
        },
        ingredients: {
          ingredients: "Ea velit ad occaecat ipsum.",
          ingredientsImg: "some image"
        },
        instructions:
          "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
      },
      {
        dayName: "Tuesday",
        meals: {
          breakfast: "breakfast",
          lunch: "lunch",
          dinner: "dinner"
        },
        ingredients: {
          ingredients: "Ea velit ad occaecat ipsum.",
          ingredientsImg: "some image"
        },
        instructions:
          "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
      },
      {
        dayName: "Wednesday",
        meals: {
          breakfast: "breakfast",
          lunch: "lunch",
          dinner: "dinner"
        },
        ingredients: {
          ingredients: "Ea velit ad occaecat ipsum.",
          ingredientsImg: "some image"
        },
        instructions:
          "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
      },
      {
        dayName: "Thursday",
        meals: {
          breakfast: "breakfast",
          lunch: "lunch",
          dinner: "dinner"
        },
        ingredients: {
          ingredients: "Ea velit ad occaecat ipsum.",
          ingredientsImg: "some image"
        },
        instructions:
          "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
      },
      {
        dayName: "Friday",
        meals: {
          breakfast: "breakfast",
          lunch: "lunch",
          dinner: "dinner"
        },
        ingredients: {
          ingredients: "Ea velit ad occaecat ipsum.",
          ingredientsImg: "some image"
        },
        instructions:
          "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
      },
      {
        dayName: "Saturday",
        meals: {
          breakfast: "breakfast",
          lunch: "lunch",
          dinner: "dinner"
        },
        ingredients: {
          ingredients: "Ea velit ad occaecat ipsum.",
          ingredientsImg: "some image"
        },
        instructions:
          "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
      }
    ];

class Mealsnew extends React.Component {
  constructor() {
    super();
    this.state = {
    Sunday: '',
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: '',
    Saturday: ''
    };


    this.createDay = this.createDay.bind(this);
  }



  createDay() {
   return week.map((day, i) => {

       return (
          <Daynew
          key={i}
          day={day.dayName}
          breakfast={day.meals.breakfast}
          lunch={day.meals.lunch}
          dinner={day.meals.dinner}
          ingredients={day.ingredients.ingredients}
          ingredientsImg={day.ingredientsImg}
          instructions={day.instructions}
          />
      );
   })
  }

  render() {
    return (
      <div className="calendar-wrapper">
          <div className="row">
            {this.createDay()}
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

export default Mealsnew;