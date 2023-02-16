import React, { useState } from 'react'
import { createContext } from "react";
import { userData } from '../data';

export const UserContext = createContext({
  users: [...userData],
  setUser: () => null,
  needChangeUser: null
})


export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([...userData])
  const [needChangeUser, setNeedChangeUser] = useState(null)

  const deleteUser = (id) => {
    setUsers(users.filter(i => i.id !== id))
  }

  const value = { users, setUsers, deleteUser, needChangeUser, setNeedChangeUser }
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
