import React, { useState } from "react";
import "./ExpenseForm.css";



const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(""); 
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [totalExpenses, setTotal] = useState("0");

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }
  // to generate total expense 
 let total = parseInt(totalExpenses) + parseInt(enteredAmount);
  
  const submitHandler = (event) => {
    event.preventDefault(); /*to STOP refresing the page after submit form  this function is used*/
  //  calling setTotalfunction for total value
    setTotal(total);
 
    const expenseData = {
      /* object created to store the value  */ title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(
      expenseData
    ); /* here we passed the object to its parent(NewExpenses.js) to render its output */

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

 const validate =() =>{
    var element = document.getElementById('title-id');
    element.value = element.value.replace(/[^a-zA-Z]+/, '');
  };

  return (
    <div>
      <h4 id="total">Total Expense: ₹{totalExpenses}</h4>

      <form onSubmit={submitHandler} methord="POST">
        <div className="expense-control">
          <div className="new-expense-control">
            <label>Title</label>
            <input
              id="title-id"
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
              name="title"
              required
              onKeyUp={validate}  /* for text only values */
            />
          </div>
          <div className="new-expense-control">
            <label>Amount</label>
            <input
              id="amount-id"
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
              name="amount"
              required
            />
          </div>
          <div className="new-expense-control">
            <label>Date</label>
            <input
              id="date-id"
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
              name="date"
              required
            />
          </div>
        </div>
        <div className="new-expense-action">
          <button type="submit" id="btnn"  name="save" >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
