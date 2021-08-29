import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    fullname: "",                             // I have used Semantic UI for better looks
    emailAddress: "",
    gender: "",
    age: "",
    address: "",
    dob: "",
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleValidity = (e) => {
    if (!e.target.validity.valid) {
      e.target.style.border = "1px solid red";
    } else {
      e.target.style.border = "";
    }
  };
  const print = () => {
    setRecords([...records, data]);

    setData({
      fullname: "",
      emailAddress: "",
      gender: "",
      age: "",
      address: "",
      dob: "",
    });
  };
  return (
    <div className="">
      <form className="ui form">
        <div className="inline field">
          <label>Full Name</label>
          <input
            className="four wide field"
            placeholder="Fullname"
            autoComplete="off"
            value={data.fullname}
            name="fullname"
            type="text"
            required
            onChange={handleInput}
          ></input>
        </div>
        <div className="inline field">
          <label>Email address</label>
          <input
            className="four wide field"
            placeholder="abc@xyz.com"
            value={data.emailAddress}
            name="emailAddress"
            id="email"
            type="email"
            onChange={handleInput}
            onBlur={handleValidity}
          />
        </div>
        <div className="inline field">
          <label>Age</label>
          <input
            className="four wide field"
            placeholder="Age"
            value={data.age}
            name="age"
            type="number"
            onChange={handleInput}
          ></input>
        </div>
        <div>
          <label>Select your gender : </label>
          <label> female </label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={data.gender === "female"}
            onChange={handleInput}
          ></input>
          <label> male </label>
          <input
            type="radio"
            value="male"
            name="gender"
            checked={data.gender === "male"}
            onChange={handleInput}
          ></input>
        </div>
        <div>
          <label>Address</label>
          <input
            className="twelve wide field"
            placeholder="Full address"
            value={data.address}
            name="address"
            onChange={handleInput}
          ></input>
        </div>
        <div>
          <input
            className="four wide field"
            type="date"
            value={data.dob}
            name="dob"
            onChange={handleInput}
          ></input>
        </div>
        <input
          type="submit"
          value="Submit The Form"
          className="ui button"
          onClick={print}
        ></input>
      </form>
      <div>
        {records.map((d) => (
          <div className="ui cards">
            <div className="card">
              <div className="content">
                <div className="header">{d.fullname}</div>
                <div className="meta">{d.emailAddress}</div>
                <div className="meta">{d.age}</div>
                <div className="meta">{d.gender}</div>
                <div className="meta">{d.address}</div>
                <div className="meta">{d.dob}</div>
                <button
                  className="ui red button"
                  onClick={() => setRecords(records.filter((i) => d !== i))}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
