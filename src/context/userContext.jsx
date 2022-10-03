import { get } from "api";

const { createContext, useEffect, useState } = require("react");

const UserContext = createContext({ user: {}, setUser: () => { } })

export default function UserProvider({ children }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("link_id")) setUser(localStorage.getItem("link_id"))
  }, [])


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext };