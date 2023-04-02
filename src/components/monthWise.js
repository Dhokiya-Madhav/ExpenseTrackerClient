import React, { useEffect, useState } from 'react'

export default function MonthWise() {
    const [monthWiseData, setMonthWiseData] = useState({})
    const [ttl,setTTL] = useState(0);
    
    useEffect(() => {
        if(localStorage.getItem("userId") == undefined)
        {
            window.location = "http://localhost:3000/login";
        }
    }, []);

    var total = 0;
    const handleMonth = () => {
        fetch("https://localhost:44329/exp/Expenses/userId/" + localStorage.getItem("userId")).then((response) => response.json())
            .then((data) => {
                setMonthWiseData(data);
                console.log(data);
            })
        var m = document.getElementById("monthDD").value;

        if (m == 'January') {
            total = 0;
            for (var i = 0; i < monthWiseData.length; i++) {
                if (monthWiseData[i].date[5] == 0 && monthWiseData[i].date[6] == 1) {
                    total += monthWiseData[i].amount;
                }
            }
            setTTL(total);
            console.log(total);
            console.log("1");
        }
        else if (m == 'February') {
            total = 0;
            for (var i = 0; i < monthWiseData.length; i++) {
                if (monthWiseData[i].date[5] == 0 && monthWiseData[i].date[6] == 2) {
                    total += monthWiseData[i].amount;
                }
            }
            setTTL(total);
            console.log(total);
            console.log("2");
        }
        else if (m == 'March') {
            total = 0;
            for (var i = 0; i < monthWiseData.length; i++) {
                if (monthWiseData[i].date[5] == 0 && monthWiseData[i].date[6] == 3) {
                    total += monthWiseData[i].amount;
                }
            }
            setTTL(total);
            console.log(total);
            console.log("3");
        }
        else if (m == 'April') {
            total = 0;
            for (var i = 0; i < monthWiseData.length; i++) {
                if (monthWiseData[i].date[5] == 0 && monthWiseData[i].date[6] == 4) {
                    total += monthWiseData[i].amount;
                }
            }
            setTTL(total);
            console.log(total);
            console.log("4");
        }
        else if (m == 'May') {
            total = 0;
            for (var i = 0; i < monthWiseData.length; i++) {
                if (monthWiseData[i].date[5] == 0 && monthWiseData[i].date[6] == 5) {
                    total += monthWiseData[i].amount;
                }
            }
            setTTL(total);
            console.log(total);
            console.log("5");
        }
        else if (m == 'June') {
            total = 0;
            for (var i = 0; i < monthWiseData.length; i++) {
                if (monthWiseData[i].date[5] == 0 && monthWiseData[i].date[6] == 6) {
                    total += monthWiseData[i].amount;
                }
            }
            setTTL(total);
            console.log(total);
            console.log("6");
        }
        else if (m == 'July') {
            total = 0;
            for (var i = 0; i < monthWiseData.length; i++) {
                if (monthWiseData[i].date[5] == 0 && monthWiseData[i].date[6] == 7) {
                    total += monthWiseData[i].amount;
                }
            }
            setTTL(total);
            console.log(total);
            console.log("7");
        }
        else if (m == 'August') {
            total = 0;
            for (var i = 0; i < monthWiseData.length; i++) {
                if (monthWiseData[i].date[5] == 0 && monthWiseData[i].date[6] == 8) {
                    total += monthWiseData[i].amount;
                }
            }
            setTTL(total);
            console.log(total);
            console.log("8");
        }
        else if (m == 'September') {
            total = 0;
            for (var i = 0; i < monthWiseData.length; i++) {
                if (monthWiseData[i].date[5] == 0 && monthWiseData[i].date[6] == 9) {
                    total += monthWiseData[i].amount;
                }
            }
            setTTL(total);
            console.log(total);
            console.log("9");
        }
        else if (m == 'October') {
            total = 0;
            for (var i = 0; i < monthWiseData.length; i++) {
                if (monthWiseData[i].date[5] == 1 && monthWiseData[i].date[6] == 0) {
                    total += monthWiseData[i].amount;
                }
            }
            setTTL(total);
            console.log(total);
            console.log("10");
        }
        else if (m == 'November') {
            total = 0;
            for (var i = 0; i < monthWiseData.length; i++) {
                if (monthWiseData[i].date[5] == 1 && monthWiseData[i].date[6] == 1) {
                    total += monthWiseData[i].amount;
                }
            }
            setTTL(total);
            console.log(total);
            console.log("11");
        }
        else if (m == 'December') {
            total = 0;
            for (var i = 0; i < monthWiseData.length; i++) {
                if (monthWiseData[i].date[5] == 1 && monthWiseData[i].date[6] == 2) {
                    total += monthWiseData[i].amount;
                }
            }
            setTTL(total);
            console.log(total);
            console.log("12");
        }
    }
    return (
        <>
            <center>
                Select Month: &nbsp;
                <select id='monthDD' onChange={handleMonth}>
                    <option value='' selected></option>
                    <option value='January'>January</option>
                    <option value='February'>February</option>
                    <option value='March'>March</option>
                    <option value='April'>April</option>
                    <option value='May'>May</option>
                    <option value='June'>June</option>
                    <option value='July'>July</option>
                    <option value='August'>August</option>
                    <option value='September'>September</option>
                    <option value='October'>October</option>
                    <option value='November'>November</option>
                    <option value='December'>December</option>
                </select> Year: 2023
                <br></br>
                <br></br>
                Total Expense:- {ttl}
            </center>
        </>
    )
}