import React, { useEffect, Component } from 'react'

export default class Budget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            Monthly_Budget:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { userName,password,email,Monthly_Budget } = this.state;

        fetch("https://localhost:44329/user/Users/"+Number(localStorage.getItem("userId")), {
            method: "PUT",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                id:localStorage.getItem("userId"),
                userName:localStorage.getItem("userName"),
                password:localStorage.getItem("userPsw"),
                email:localStorage.getItem("userEmail"),
                Monthly_Budget:""
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.status);
                if (data.status === 400) {
                    alert("Some error occured");
                }
                else {
                    console.log("Budget Updated");
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
                                    <input type="number" onChange={(e) => this.setState({ Monthly_Budget: e.target.value })} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Set Monthly Budget</label>
                                </div>
                                <br></br>
                                <button className='btn btn-outline-success' type='submit'>Update</button>
                            </div>

                        </div>
                    </div>
                </form>
            </>
        )
    }
}
