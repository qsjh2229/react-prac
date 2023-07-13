import React, { useState } from "react";
import "./Expenseitem.css";
import ExpenseDatee from "./ExpenseDatee";
import Card from "../UI/Card";
function Expenseitem(props) {
 
const [title, seTitle] =   useState(props.title);
  
  const ClickHandler = () => {
    seTitle('하ㅣㅇ허아')
  
  };

  return (
    <Card className="expense-item">
      <ExpenseDatee date={props.date}></ExpenseDatee>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={ClickHandler}> cladng TITLE</button>
    </Card>
  );
}
export default Expenseitem;
