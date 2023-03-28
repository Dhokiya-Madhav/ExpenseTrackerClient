import React, { Component } from 'react'


export default class Signup extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            email: "",
            mb: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { userName,password,email,mb } = this.state;
        console.log(userName, email, password,mb);
        fetch("https://localhost:44329/user/Users", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                userName,
                password,
                email,
                mb,
            }), 
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.status);
                if(data.status === 400)
                {
                    alert("User Already Exists")
                }
                else if(data.status === 500)
                {
                    console.log("Signup successfull");
                    window.location = "http://localhost:3000/login";   
                }
                else
                {
                    console.log("Signup successfull");
                    window.location = "http://localhost:3000/login";   
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
                                    <input type="text" onChange={(e) => this.setState({ userName: e.target.value })} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Username</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" onChange={(e) => this.setState({ password: e.target.value })} className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <br></br>
                                <button type='submit' className='btn btn-outline-success'>Register</button>
                            </div>

                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="email" onChange={(e) => this.setState({ email: e.target.value })} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email Id</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="number" onChange={(e) => this.setState({ mb: e.target.value })} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Monthly Budget</label>
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
