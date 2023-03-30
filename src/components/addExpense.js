import React, { useEffect, Component } from 'react'

export default class AddExpense extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            userId: localStorage.getItem("userId"),
            date: "",
            Amount: "",
            Category: "",
            Description: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
    }

    handleCategory(e){
        this.setState({Category:e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const { userId, date, Amount, Category, Description } = this.state;
        console.log(userId, date, Amount, Category, Description);
        fetch("https://localhost:44329/exp/Expenses", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                userId: localStorage.getItem("userId"),
                date,
                Amount,
                Category,
                Description
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                
                if (data.status === 400) {
                    alert("Some Error Occured Try Again");
                }
                else {
                    alert("Expense Added");
                }
            });
    }

    render() {
        return (
            <>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="container text-center">
                        <div className="row align-items-start">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="date" onChange={(e) => this.setState({ date: e.target.value })} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Date</label>
                                </div>
                                <div className="form-floating">
                                    <input type="number" onChange={(e) => this.setState({ Amount: e.target.value })} className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Amount</label>
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
                                <div className="form-floating">
                                    <input type="text" autoComplete='false' onChange={(e) => this.setState({ Description: e.target.value })} className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Description</label>
                                </div>
                                <br></br>
                                <button className='btn btn-success' type='submit'>Add Expense</button>
                            </div>

                        </div>
                    </div>
                </form>
            </>
        )
    }
}
