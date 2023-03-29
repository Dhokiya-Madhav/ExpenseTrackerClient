import React, { useEffect, useState } from 'react'

export default function Expenses() {

    const [expense, setNewExpense] = useState([])

    useEffect(() => {
        fetch("https://localhost:44329/exp/Expenses/userId/" + localStorage.getItem("userId")).then((response) => response.json())
            .then((data) => {
                setNewExpense(data);
                console.log(data);
            })
    }, []);

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Expense Id</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {expense.map(expData => (
                    <tr>
                        <th scope="row">{expData.id}</th>
                        <td>{expData.date}</td>
                        <td>{expData.amount}</td>
                        <td>{expData.category}</td>
                        <td>{expData.description}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
