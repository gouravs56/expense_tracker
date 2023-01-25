import "./Expenses.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <>
    
      <div className="expenses"> 
      <h4 id="expense-history">Expense History</h4>
        {props.item.map(
          /*  To loop all object data the map function used */
          (expense__) => (
            <ExpenseItem
              key={expense__.id}
              date={
                expense__.date
              }
              title={expense__.title}
              amount={expense__.amount}
            />
          )
        )}
      </div>
    </>
  );
};

export default Expenses;
