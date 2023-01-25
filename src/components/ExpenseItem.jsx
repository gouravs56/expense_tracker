import React from 'react'
import "./ExpenseItem.css";

function ExpenseItem(props) {

// date formatting
let option={
  weekday:'short',
  year:'numeric',
  month:'short',
  day: 'numeric'
}

  return (
    <div className="expense-item">  
     
      <div id='time'> {props.date.toLocaleString("en-GB",option)  }</div>     
     
      <div className="expense-item-desc"> </div>
        <h2 id='title-history'> {props.title} </h2> 
        {/* to use js expression ,have to use curly{} braces */}
        <div className="expense-item-price">₹{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
