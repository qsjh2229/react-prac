import React,{useState} from "react";
import Card from "../UI/Card";
import Expenseitem from "./Expenseitem";
import "./Expense.css";
import ExpenseFIlter from "./ExpenseFIlter";

const Expense = (props) => {
  const[filteryear ,setFilteryear]= useState('2020')
  const filterChangeHandler= selectedYear =>{
    setFilteryear(selectedYear);
  };
  return (
    <div>
      <Card className="Expense">
        <ExpenseFIlter selected={filteryear} onChangeFilter={filterChangeHandler}/>
        {props.items.map((Expense) =>(
        <Expenseitem
         title={Expense.title} 
         amount={Expense.amount}
         date={Expense.date}/>
         ))}
        
      </Card>
    </div>
  );
};

export default Expense;
