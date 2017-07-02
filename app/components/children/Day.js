import React from 'react';

export const Day = (props) => {
    return (
    <div className="panel" id="day-wrapper">

      <div className="day-name">
        {props.day}
      </div>


      <div className="meals">

        <div className="lunch">
          {props.lunch}
        {/*  <button className="">Delete Meal</button>*/}
        </div>

      </div>



      <img className="meal-img" alt="Image of meal" src="" />
     {/* <button>Update Meals</button>*/}
    </div>
  );
}

export default Day