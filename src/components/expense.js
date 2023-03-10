import React,{ useEffect, useState } from 'react'

export default function Expenses() {
    const [expense,setNewExpense] = useState([])
    useEffect(() => {
        fetch("https://localhost:44329/exp/Expenses").then((response) => response.json())
            .then((data) => {
                setNewExpense(data);
                console.log(data);
            })
    },[]);
    return (
        <>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className='col'>
                        <h5>Filters</h5>
                        <form>
                            <input type="text" className="form-control" placeholder='Search' />
                            <br></br>
                            <input type="date" className="form-control" id="exampleFormControlInput1" />
                            <br></br>
                            <input type="month" className="form-control" min="2018-01" placeholder='Month' />
                            <br></br>
                            <button className='btn btn-outline-success'>Apply</button>
                            &nbsp;&nbsp;&nbsp;
                            <button className='btn btn-outline-danger'>Clear filters</button>
                        </form>
                    </div>
                    <div className="col">
                        <h5>Expenses</h5>
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        Expense 1
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
