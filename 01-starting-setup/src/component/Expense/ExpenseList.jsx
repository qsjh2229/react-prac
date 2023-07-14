import React from 'react';
import Expenseitem from './Expenseitem';
const ExpenseList = (props) => {
    let expenseContent =<p>내용 없음</p>
    if (props.item.length>0){
      expenseContent =   props.item.map((Expense) =>(
        <Expenseitem  key={Expense.id}
         title={Expense.title} 
         amount={Expense.amount}
         date={Expense.date}/>
         ))
  
    }
    return (
        <ul>
         <li></li>
        </ul>
    );
};

export default ExpenseList;