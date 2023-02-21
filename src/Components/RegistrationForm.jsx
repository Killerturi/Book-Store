import React from "react";
import { useState } from "react";

const RegistrationForm = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [newInput, setNewInput] = useState([]);

  const handleText = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (input.username && input.email && input.phone && input.password) {
      const data = {
        ...input,
        id: new Date().getTime().toString(),
      };
      setNewInput([...newInput, data]);

      setInput({
        username: "",
        email: "",
        phone: "",
        password: "",
      });

      alert("Registration successfull👍 ");
    }
  };

  const removeItem = (id) => {
    setNewInput((deleteItems) => {
      return deleteItems.filter((element) => element.id !== id);
    });
  };

  return (
    <>
      <div className="header">
        <h2>
          <u>Registration Form</u>
        </h2>
      </div>
      <div className="mainContainer">
        <div className="formContainer">
          <div className="left-side">
            <div className="left-formContainer">
              <form onSubmit={submitHandle}>
                <div>
                  <label>Full Name:</label>
                  <input
                    type="text"
                    value={input.username}
                    placeholder="enter your name"
                    onChange={handleText}
                    name="username"
                  />
                </div>
                <div>
                  <label>Email id :</label>
                  <input
                    type="email"
                    value={input.email}
                    placeholder="enter your email"
                    onChange={handleText}
                    name="email"
                  />
                </div>
                <div>
                  <label>Phone no:</label>
                  <input
                    type="number"
                    value={input.phone}
                    placeholder="enter your phone"
                    onChange={handleText}
                    name="phone"
                  />
                </div>
                <div>
                  <label>Password:</label>
                  <input
                    type="password"
                    value={input.password}
                    placeholder="enter your password"
                    onChange={handleText}
                    name="password"
                  />
                </div>
                <button type="submit">Registratoin</button>
              </form>
            </div>
          </div>
          {/* 
          <div className="box-cards">
            {newInput.map((val) => {
              const { id, username, email, phone, password } = val;
              return (
                <div className="box-card" key={id}>
                  <h4>{username}</h4>
                  <h4>{email}</h4>
                  <h4>{phone}</h4>
                  <h4>{password}</h4>
                  <button onClick={() => removeItem(id)}>X</button>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
