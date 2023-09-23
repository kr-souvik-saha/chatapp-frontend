import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./Views/Register";
import Login from "./Views/Login";
import Home from "./Views/Home";
import { UserContext, UserContextProvider } from "./context/UserContext";
import Protected from "./Views/Protected";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
    {
      path: "/",
      element: (
        <Protected>
          <Home></Home>
        </Protected>
      ),
    },
  ]);

  return (
    <>
      <UserContextProvider>
        <div className="Route">
          <RouterProvider router={router} />
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;
