import React, { useEffect, useState } from 'react'

export default function Expenses() {

    const [expense, setNewExpense] = useState([])

    useEffect(() => {
        fetch("https://localhost:44329/exp/Expenses/userId/" + localStorage.getItem("userId")).then((response) => response.json())
            .then((data) => {
                if(data.length > 0)
                {
                    setNewExpense(data);
                    console.log(data);
                }
            })
    }, []);


    const handleDelete = (id) => {
        fetch("https://localhost:44329/exp/Expenses/" + id, {
            method: "DELETE",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.status);

            });

        fetch("https://localhost:44329/exp/Expenses/userId/" + localStorage.getItem("userId")).then((response) => response.json())
            .then((data) => {
                setNewExpense(data);
                console.log(data);

            })
    }

    const handleEdit = (id) => {
        localStorage.setItem("expenseId",id);
        window.location = "http://localhost:3000/updateExp";
    }
    return (
        <>

            <table className="table table-striped table-hover caption-top">
                <thead>
                    <tr>
                        <td scope="col">Expense Id</td>
                        <td scope="col">Date</td>
                        <td scope="col">Amount</td>
                        <td scope="col">Category</td>
                        <td scope="col">Description</td>
                        <td scope="col">Action</td>
                    </tr>
                </thead>
                <tbody>
                    {expense.map(expData => (
                        <tr>
                            <th scope="row">{expData.id}</th>
                            <td>{expData.date.slice(0, 10)}</td>
                            <td>{expData.amount}</td>
                            <td>{expData.category}</td>
                            <td>{expData.description}</td>
                            <td>
                                <button className='btn btn-success' onClick={() => handleEdit(expData.id)}>Edit</button>
                                &nbsp;
                                <button className='btn btn-danger' onClick={() => handleDelete(expData.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}