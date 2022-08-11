import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/init-firebase";
import { auth } from "../lib/init-firebase";


const LoginCompo = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  const userCollectionRef = collection(db, "Users");
  function handleSubmit(e) {
    e.preventDefault();
    if (registerEmail === "" || registerPassword === "") {
      alert("Fill all fields");
      return;
    }

    const us = createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    )
      .then(() => {
        console.log("Account Created");
        addDoc(userCollectionRef, { registerEmail, registerPassword })
          .then((Response) => {
            console.log("Response for submitted successfuly");
          })
          .catch(console.error());
        setUser(us);
        document.getElementById("loginform").style.visibility = "visible";
        document.getElementById("registerform").style.visibility = "hidden";
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function functionSubmit(e) {
    e.preventDefault();
    if (loginEmail === "" || loginPassword === "") {
      alert("Fill all fields");
      return;
    }

    const us = signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(() => {
        console.log("Login Successful");
        setUser(us);
      })
      .catch((error) => {
        console.log(error.message);
        document.getElementById("loginform").style.visibility = "hidden";
        document.getElementById("registerform").style.visibility = "visible";
      });
    console.log(user);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} id="registerform">
        <div>
          <h1> Register User </h1>
          <input
            placeholder="Email..."
            type={"email"}
            value={registerEmail}
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
            style={{
              width: "400px",
              margin: "10px",
              height: "40px",
              fontSize: "20px",
              textAlign: "center",
              borderRadius: "50px",
            }}
          />
          <input
            placeholder="Password..."
            type={"text"}
            value={registerPassword}
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
            style={{
              width: "400px",
              margin: "10px",
              height: "40px",
              fontSize: "20px",
              textAlign: "center",
              borderRadius: "50px",
            }}
          />
          <button
            type="submit"
            style={{
              width: "150px",
              margin: "30px",
              height: "40px",
              fontSize: "20px",
              borderRadius: "50px",
            }}
          >
            {" "}
            Register
          </button>
        </div>
      </form>

      <form onSubmit={functionSubmit} id="loginform">
        <div>
          <h1> Login </h1>
          <input
            placeholder="Email..."
            type={"email"}
            value={loginEmail}
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
            style={{
              width: "400px",
              margin: "10px",
              height: "40px",
              fontSize: "20px",
              textAlign: "center",
              borderRadius: "50px",
            }}
          />
          <input
            placeholder="Password..."
            type={"text"}
            value={loginPassword}
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
            style={{
              width: "400px",
              margin: "10px",
              height: "40px",
              fontSize: "20px",
              textAlign: "center",
              borderRadius: "50px",
            }}
          />
          <button
            type="submit"
            style={{
              width: "150px",
              margin: "30px",
              height: "40px",
              fontSize: "20px",
              borderRadius: "50px",
            }}
          >
            {" "}
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginCompo;
