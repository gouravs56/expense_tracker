import Expenses from "./components/Expenses";
import React, { useState ,useEffect } from 'react'
import NewExpenses from "./components/NewExpenses/NewExpenses"; 



 let arrayOfObj = [ ];
  
const App = () => {
 
  const [expensesArray, setExpenses] = useState(arrayOfObj)

  // A function for fetching the data from db
  const fetchData = () => {
    fetch('http://localhost/php-api/api.php').then(
      Response=>{
        return Response.json()
      } 
    ).then(
      data=>{
        setExpenses(data)
      }
    )
  }

  useEffect(() => {
    fetchData()
  }, [])  /* to stop the rerendering issue useEffevt and empty array needed */
  


  const addNewExpense = (expense__) => {   /* this function is created to take the data from its child which is passed via expense  */

  
  const updatedExpense=[expense__, ...expensesArray]  /* prop drilling */
    setExpenses(updatedExpense)
  }
  

  return (
    <div>
      <NewExpenses onAddNewExpenses={addNewExpense} /> 

      
      <Expenses item={expensesArray} /> {/* here item is a props */}
     {/*  self closing tag is typically used when it has no children and its more Compact*/}
    </div>
  );
}

export default App;

