import './Expenseitem.css'
import ExpenseDatee from './ExpenseDatee';
import Card from './Card';
function Expenseitem(props){

  
  return (
    <Card className="expense-item">
   <ExpenseDatee date={props.date}></ExpenseDatee>
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  </Card>
  );
 
}
export default Expenseitem