import React from "react";
import Day from './Day.js';


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

class MealsCalendar extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue"
    };


    this.createDay = this.createDay.bind(this);
  }

  createDay() {
   return week.map((day) => {
       return (
        <Day
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
        {this.createDay()}
        This is a Component
      </div>
    );
  }
}

export default MealsCalendar;

