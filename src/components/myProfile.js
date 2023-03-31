import React, { useEffect, useState } from 'react'

export default function MyProfile() {
    const [usr, setUsr] = useState({})

    useEffect(() => {
        fetch("https://localhost:44329/user/Users/" + localStorage.getItem("userId")).then((response) => response.json())
            .then((data) => {
                setUsr(data);
                console.log(data);
            })
    }, []);

    const handleUpdate = () => {
        fetch('https://localhost:44329/user/Users/' + localStorage.getItem("userId"), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(usr)
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
        setUsr(prevData => ({ ...prevData, [name]: value }));
    };
    return (
        <>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input type="text" value={usr.id} className="form-control" readOnly />
                            <label for="floatingInput">User Id</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" value={usr.userName} name='userName' onChange={handleInputChange} id="dateTxt" className="form-control" />
                            <label for="floatingPassword">Username</label>
                        </div>
                        <br></br>
                        <div className="form-floating">
                            <input type="text" value={usr.password} name='password' onChange={handleInputChange} className="form-control" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <br></br>
                        <button type='submit' onClick={handleUpdate} className='btn btn-outline-success'>Update</button>
                    </div>

                    <div className="col">
                        <div className="form-floating mb-3">
                            <input type="email" value={usr.email} name='email' onChange={handleInputChange} className="form-control" id="floatingInput" />
                            <label for="floatingInput">Email</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="number" value={usr.monthly_Budget} name='monthly_Budget' onChange={handleInputChange} className="form-control" id="floatingInput" />
                            <label for="floatingInput">Monthly Budget</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}