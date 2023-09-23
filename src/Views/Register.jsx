import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const { registerController } = require("../Controllers/UserController");

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loggedinUser = useContext(UserContext);

  async function register(e) {
    e.preventDefault();
    await registerController(username, password);
  }
  return (
    <>
      {loggedinUser.username && <Navigate to="/" replace={true}></Navigate>}
      <div className="bg-blue-50 h-screen flex items-center">
        <form action="" className="w-64 mx-auto mb-12" onSubmit={register}>
          <input
            type="text"
            placeholder="username"
            className="block w-full rounded-sm p-2 mb-2 border"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="password"
            className="block w-full rounded-sm p-2 mb-2 border"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
