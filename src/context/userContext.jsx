import { get } from "api";

const { createContext, useEffect, useState } = require("react");

const UserContext = createContext({ user: {}, setUser: () => { } })

export default function UserProvider({ children }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("link_id")) setUser(localStorage.getItem("link_id"))
  }, [])

  const onConnect = (link) => {
    localStorage.setItem("link_id", link);
    setUser(link);
  }


  return (
    <UserContext.Provider value={{ user, setUser, onConnect }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext };