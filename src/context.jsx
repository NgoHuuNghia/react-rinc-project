import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://store.steampowered.com/api/appdetails?appids=740130'
const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  // States


  return (
    <AppContext.Provider
      value={{
        url,
      }}>
        {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}