import React, { useEffect } from 'react'

export default function Budget() {

    useEffect(() => {
        if(!localStorage.getItem("userId"))
        {
            window.location =  "http://localhost:3000/Login";
        }
    },[])

    return (
        <>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Set Monthly Budget</label>
                        </div>
                        <br></br>
                        <button className='btn btn-outline-success'>Update</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
