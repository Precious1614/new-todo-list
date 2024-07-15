import React from "react";
import ImageSpace from "../../images/multitask-business.webp";
import "../../component/todo/todo.css";
import { useState } from "react";

const Register = () => {
  const [inputfullname, SetInputfullname] = useState("");
  const [inputemail, SetInputEmail] = useState("");
  const [inputpassword, SetInputPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputfullname || !inputemail || !inputpassword) {
      alert("kindly, input your details");
    } else {
      alert("login succesful");
    }
    SetInputfullname("");
    SetInputEmail("");
    SetInputPassword("");
  }

  return (
    <div>
      <div className="aa-showcase">
        <div className="aa_register-box">
          <div className="aa_showcase-left">
            <img className="image" src={ImageSpace} alt="" />
          </div>
          <div className="register-cont-right">
            <div className="card-cont">
              <h2>Login to your account</h2>
              <form className="register-form-card" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name=""
                  id="myfullname"
                  placeholder="Fullname"
                  value={inputfullname}
                  onChange={(e) => SetInputfullname(e.target.value)}
                />
                <input
                  type="email"
                  name=""
                  id="myemail"
                  placeholder="Email"
                  value={inputemail}
                  onChange={(e) => SetInputEmail(e.target.value)}
                />

                <input
                  type="password"
                  name=""
                  id="mypassword"
                  placeholder="Password"
                  value={inputpassword}
                  onChange={(e) => SetInputPassword(e.target.value)}
                />
                <button className="save-btn">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
