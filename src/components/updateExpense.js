import React, { Component,useEffect } from 'react'


export default class UpdateExpense extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            date: "",
            Amount: "",
            Category: "",
            Description: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { userName, password, email, mb } = this.state;
        console.log(userName, email, password, mb);
        fetch("https://localhost:44329/user/Users", {
            method: "GET",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                id: localStorage.getItem("expenseId"),
                userId: localStorage.getItem("userId"),
                date: "",
                Amount: "",
                Category: "",
                Description: ""
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.status);
                if (data.status === 400) {
                    alert("User Already Exists")
                }
                else if (data.status === 500) {
                    console.log("Signup successfull");
                    window.location = "http://localhost:3000/login";
                }
                else {
                    console.log("Signup successfull");
                    window.location = "http://localhost:3000/login";
                }
            });
    }
    render() {
        return (
            <>
                {localStorage.getItem("expenseId")}
                <form onSubmit={this.handleSubmit}>
                    <div className="container text-center">
                        <div className="row align-items-start">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" value={localStorage.getItem("expenseId")} placeholder="name@example.com" readOnly />
                                    <label for="floatingInput">Expense Id</label>
                                </div>
                                <div className="form-floating">
                                    <input type="date" onChange={(e) => this.setState({ date: e.target.value })} className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Date</label>
                                </div>
                                <br></br>
                                <div className="form-floating">
                                    Select Category :- &nbsp;
                                    <select name="category" id='categorySelect' onChange={this.handleCategory} >
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
                                <br></br>
                                <button type='submit' className='btn btn-outline-success'>Update</button>
                            </div>

                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="number" onChange={(e) => this.setState({ Amount: e.target.value })} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Amount</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" onChange={(e) => this.setState({ Description: e.target.value })} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Description</label>
                                </div>
                                <button type='reset' className='btn btn-outline-danger'>Clear Form</button>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}
