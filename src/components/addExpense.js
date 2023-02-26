import React from 'react'

export default function AddExpense() {

    return (
        <>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input type="date" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Date</label>
                        </div>
                        <div className="form-floating">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Amount</label>
                        </div>
                        <br></br>
                        <div className="form-floating">
                            Select Category :- &nbsp;
                            <select name="category" id='categorySelect'>
                                <option value="Food">Food</option>
                                <option value="Travel">Travel</option>
                                <option value="Grocery">Grocery</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Vegetable">Vegetable</option>
                                <option value="Clothes">Clothes</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <br></br>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Description</label>
                        </div>
                        <br></br>
                        <button className='btn btn-success'>Add Expense</button>
                    </div>

                </div>
            </div>
        </>
    )
}
