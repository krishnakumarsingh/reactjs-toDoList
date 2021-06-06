import React, { useState } from "react";
import ModalContainer from "./ModalContainer";

const LoginForm = ({ setUname, setPassword, login, erroMsg }) => {
  const [remember, setRemember] = useState(false);
  return (
    <ModalContainer>
      <div className="login-block-imgcontainer">
        <img
          src="https://www.w3schools.com/howto/img_avatar2.png"
          alt="Avatar"
          className="avatar"
        />
      </div>
      {erroMsg && (
        <div className={`p-3 mb-2 bg-${erroMsg.type} text-white`}>
          {erroMsg.msg}
        </div>
      )}
      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          onChange={(e) => setUname(e.target.value)}
          required
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={() => login()}>Login</button>
        <label>
          <input
            type="checkbox"
            checked={remember ? true : false}
            name="remember"
            onChange={(e) => setRemember(e.target.checked)}
          />{" "}
          Remember me
        </label>
      </div>

      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button
          type="button"
          onClick={() =>
            (document.getElementById("id01").style.display = "none")
          }
          className="login-block-cancelbtn"
        >
          Cancel
        </button>
        <span className="login-block-psw">
          Forgot <a href="#">password?</a>
        </span>
      </div>
    </ModalContainer>
  );
};

export default LoginForm;
