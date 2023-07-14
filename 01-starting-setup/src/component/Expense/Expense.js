import React,{useState} from "react";
import Card from "../UI/Card";

import "./Expense.css";
import ExpenseFIlter from "./ExpenseFIlter";
import ExpenseList from "./ExpenseList";

const Expense = (props) => {
  const[filteryear ,setFilteryear]= useState('2020')
  const filterChangeHandler= selectedYear =>{
    setFilteryear(selectedYear);
  }; 
  const filterdeExpensive = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteryear
  })

  return (
    <div>
      <Card className="Expense">
        <ExpenseFIlter selected={filteryear} onChangeFilter={filterChangeHandler}/>
        <ExpenseList item={filterdeExpensive}/>
      
        
      </Card>
    </div>
  );
};

export default Expense;
