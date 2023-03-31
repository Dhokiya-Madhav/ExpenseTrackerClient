import { logDOM } from '@testing-library/react'
import React, { useEffect, useState } from 'react'

export default function UpdateExpense() {

    const [expense, setNewExpense] = useState({})

    useEffect(() => {
        fetch("https://localhost:44329/exp/Expenses/" + localStorage.getItem("expenseId")).then((response) => response.json())
            .then((data) => {
                setNewExpense(data);
                console.log(data);
            })
    }, []);

    const handleUpdate = () => {
        fetch('https://localhost:44329/exp/Expenses/' + localStorage.getItem("expenseId"), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(expense)
        })
            .then(response => JSON.parse(response)
            )
            .then(data => {
                console.log(data)
            }
            )
        
        alert("Updated Successfully")
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setNewExpense(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input type="text" value={expense.id} className="form-control" readOnly />
                            <label for="floatingInput">Expense Id</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" value={expense.date} name='date' onChange={handleInputChange} id="dateTxt" className="form-control" />
                            <label for="floatingPassword">Date</label>
                        </div>
                        <br></br>
                        <div className="form-floating">
                            <input type="text" value={expense.description} name='description' onChange={handleInputChange} className="form-control" />
                            <label for="floatingPassword">Description</label>
                        </div>
                        <br></br>
                        <button type='submit' onClick={handleUpdate} className='btn btn-outline-success'>Update</button>
                    </div>

                    <div className="col">
                        <div className="form-floating mb-3">
                            <input type="number" value={expense.amount} name='amount' onChange={handleInputChange} className="form-control" id="floatingInput" />
                            <label for="floatingInput">Amount</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" value={expense.category} name='category' className="form-control" id="floatingInput" readOnly />
                            <label for="floatingInput">Old Category</label>
                        </div>
                        <div className="form-floating mb-3">
                            Select New Category :- &nbsp;
                            <select name="category" id='categorySelect' onChange={handleInputChange} >
                                <option value="-1" selected></option>
                                <option value="Food">Food</option>
                                <option value="Travel">Travel</option>
                                <option value="Grocery">Grocery</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Vegetable">Vegetable</option>
                                <option value="Clothes">Clothes</option>
                                <option value="Investment">Investment</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}