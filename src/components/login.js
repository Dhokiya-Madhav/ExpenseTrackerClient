import React, { Component } from 'react'

export default class Login extends Component {

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
        const { userName, password, email, mb } = this.state;
        console.log(userName, email, password, mb);
        fetch("https://localhost:44329/Login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                userName: "n",
                password,
                email,
                mb:0,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                
                if (data.status === 400) {
                    alert("Invalid Email or Password")
                }
                else {
                    console.log("Login successfull");
                    localStorage.setItem("userId",data.id)
                    localStorage.setItem("userName",data.userName)
                    localStorage.setItem("userEmail",data.email)
                    console.log(localStorage.getItem("userId"));
                    console.log(localStorage.getItem("userName"));
                    console.log(localStorage.getItem("userEmail"));
                    window.location = "http://localhost:3000/";
                }
            });
    }
    render() {


        return (
            <form onSubmit={this.handleSubmit}>
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="email" onChange={(e) => this.setState({ email: e.target.value })} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" onChange={(e) => this.setState({ password: e.target.value })} className="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <br></br>
                            <button className='btn btn-outline-success' type='submit'>Login</button>
                        </div>

                    </div>
                </div>
            </form>

        )
    }
}
