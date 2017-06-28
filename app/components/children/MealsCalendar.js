import React from "react";

class MealsCalendar extends React.Component {
    constructor() {
        super();
        this.state = {
            someKey: "someValue"
        };

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
                instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
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
                instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
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
                instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
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
                instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
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
                instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
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
                instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
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
                instructions: "Aute reprehenderit elit occaecat labore voluptate dolore sunt."
            }
        ];
    }

    createDay() {
        return this.week.map(day => {
            return (
                <Day day={ day.dayName } breakfast={ day.meals.breakfast } lunch={ day.meals.lunch } dinner={ day.meals.dinner } ingredients={ day.ingredients.ingredients } ingredientsImg={ day.ingredientsImg }
                  instructions={ day.instructions } />
                );
        });
    }

    render() {
        return (
            <div className="calendar-wrapper">
              { this.createDay() }
            </div>
            );
    }
}

export default MealsCalendar;

const Day = () => {
    // to place on line 67: {props.ingredients.ingredientsImg}

    return (
        <div className="day-wrapper">
          <div className="day-name">
            Day:
            { props.day }
          </div>
          <div className="meals">
            <div className="breakfast">
              Breakfast:
              { props.breakfast }
              <button className=''>
                Delete Meal
              </button>
            </div>
            <div className="lunch">
              Lunch:
              { props.lunch }
              <button className=''>
                Delete Meal
              </button>
            </div>
            <div className="dinner">
              Dinner:
              { props.dinner }
              <button className=''>
                Delete Meal
              </button>
            </div>
          </div>
          <div className="ingredients">
            <div className="ingredients-names">
              Ingredients Needed:
              { props.ingredients }
            </div>
            <img className="ingredients-img" src="" alt="picture of u=ingredients" />
          </div>
          <div className="instructions">
            Instructions:
            { props.instructions }
          </div>
          <img className="meal-img" alt="Image of meal" src="" />
          <button>Update Meals</button>
        </div>
        );
};
