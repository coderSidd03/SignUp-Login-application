import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});


export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) {
      const BASE_URL = process.env.REACT_APP_BACKEND_URL
      axios.get(`${BASE_URL}/user/profile`).then(({ data }) => {
        setUser(data)
        setReady(true)
      })
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  )
};