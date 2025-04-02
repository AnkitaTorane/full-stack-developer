import React, { useState } from 'react'

const Local = () => {

    const [data, setdata] = useState("test...!")
    const handlelSubmit = () => {
        localStorage.setItem("localData", data)
    }
    const [get, setget] = useState("session storage...!")
    const handlelSubmit2 = () => {
        sessionStorage.setItem("city", get)
    }
    return (
        <>
            <div>
                <h1>Web Storage</h1>
                <h2>@Local Storage.....</h2>
                <input type='text' value={data} onChange={(e) => setdata(e.target.value)} />
                <button onClick={handlelSubmit}>Submit</button>
            </div>
            <h2>{localStorage.getItem("localData") ? localStorage.getItem("localData") : data}</h2>


{/* session storage */}
            
            <div>
                <h2>@Session Storage.....</h2>
                <input type='text' value={get} onChange={(e) => setget(e.target.value)} />
                <button onClick={handlelSubmit2}>check</button>
            </div>

            <h2>{sessionStorage.getItem("city") ? sessionStorage.getItem("city") : get}</h2>
        </>



    )
}
export default Local