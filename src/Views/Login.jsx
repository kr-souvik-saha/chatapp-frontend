import { useContext, useState } from "react";
import { loginController } from "../Controllers/UserController";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loggedinUser = useContext(UserContext);

  async function login(e) {
    e.preventDefault();
    await loginController(username, password);
  }

  return (
    <>
      {loggedinUser.username && <Navigate to="/" replace={true}></Navigate>}
      <div className="bg-blue-50 h-screen flex items-center">
        <form action="" className="w-64 mx-auto mb-12" onSubmit={login}>
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
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
