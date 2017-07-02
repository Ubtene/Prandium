import React from 'react';



export const ExpandedMeal = (props) => {
    return (
    <div className="panel" id="day-wrapper">
      <div className="day-name">
        Day:
        {props.day}
      </div>
      <div className="meals">

        <div className="lunch">
          Lunch:
          {props.lunch}
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

export default ExpandedMeal	

