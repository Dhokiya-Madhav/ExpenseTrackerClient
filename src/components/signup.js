import React from 'react'

export default function Signup() {

    return (
        <>
            <form>
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Username</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <br></br>
                            <button type='submit' className='btn btn-outline-success'>Register</button>
                        </div>

                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email Id</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" />
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
