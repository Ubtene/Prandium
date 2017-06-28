import React from 'react';

export const Day = (props) => {
    return (
    <div className="day-wrapper panel">
      <div className="day-name">
        Day:
        {props.day}
      </div>
      <div className="meals">
        <div className="breakfast">
          Breakfast:
          {props.breakfast}
          <button className="">Delete Meal</button>
        </div>
        <div className="lunch">
          Lunch:
          {props.lunch}
          <button className="">Delete Meal</button>
        </div>
        <div className="dinner">
          Dinner:
          {props.dinner}
          <button className="">Delete Meal</button>
        </div>
      </div>
      <div className="ingredients">
        <div className="ingredients-names">
          Ingredients Needed:
          {props.ingredients}
        </div>
        <img
          className="ingredients-img"
          src=""
          alt="picture of ingredients"
        />
      </div>
      <div className="instructions">
        Instructions:
        {props.instructions}
      </div>
      <img className="meal-img" alt="Image of meal" src="" />
      <button>Update Meals</button>
    </div>
  );
}

export default Day