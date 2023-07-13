import React ,{useState} from 'react';
import'./ExpenseForm.css'

const ExpenseForm = () => {
    const[enteredTitle, setEnteredTitle] = useState('')
    const[enteredAmount, setEnteredAmount] = useState('')
    const[entereDate, setEnteredDate] = useState('')
    const titleChangeHandler= (event)=>{  
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler= (event)=>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler= (event)=>{
        setEnteredDate(event.target.value)
    }
    const sbmitHandler=(event)=>{
        event.preventDefault()
        const expenseData ={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(entereDate)
           
        }
        console.log(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    return (
        <form onSubmit={sbmitHandler}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2024-01-01" value={entereDate} onChange={dateChangeHandler}/>
                </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit' >Add Expenxe</button>
                </div>
          
        </form>
    );
};

export default ExpenseForm;