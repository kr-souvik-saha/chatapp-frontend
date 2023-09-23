import { useEffect, useState, createContext } from "react";
import { profileController } from "../Controllers/UserController";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [username, setUsername] = useState();
  const [id, setId] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await profileController();
      let data = null;
      response.data ? (data = response.data) : (data = null);
      if (data) {
        setId(data._id);
        setUsername(data.username);
      }
    }
    fetchData();
  }, []);
  return (
    <UserContext.Provider value={{ username, setUsername, id, setId }}>
      {children}
    </UserContext.Provider>
  );
}
