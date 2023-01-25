import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

const NewExpenses = (props) => {  /* here props used to send data to app.js*/
    
    

    const saveExpenseDataHandler = (enterdExpensedData) => {   /* here created a func to take its value from child (ExpenseForm.js) to pass it to its parent App.js */
    	const expensedData={   /* this objected is created to store the arrived data from ExpenseForm.js */
            ...enterdExpensedData,  /* spread operator to copy the object */
            id:Math.random().toString(), /*  to get random id every time */
        }

        props.onAddNewExpenses(expensedData);  /* object passed through props to its paent app.js */
        
        
    }
    return(      
    <div className='new-expense' >
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
     </div>    /* here onSaveExpenseData is props and saveExpenseDataHandler is function  */
    )
};
export default  NewExpenses