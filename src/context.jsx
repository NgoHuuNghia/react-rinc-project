import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

const BasicUrl = 'https://api.rawg.io/api/games'
// see rawg api doc for more info on how to use it https://api.rawg.io/docs/#operation/games_list
const APIkey = '?key=8988510ce7664ac580a6c3b238a28e69'
const AppContext = React.createContext()

const initialState = {
  loading: false,
  featuredList: [],
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async (size, ) => {
    try {
      const size = '&page_size=5'
      const rating = '&ordering=-rating'
      const date = (peroid) => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0')
        const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
        const yyyy = today.getFullYear()
        const yyyyPeroid = yyyy - peroid
  
        return '&dates=' + yyyyPeroid + '-' + mm + '-' + dd + ',' + yyyy + '-' + mm + '-' + dd
      }
      const response = await fetch(`${BasicUrl}${APIkey}${size}${date(2)}`)
      const data = await response.json()
      const {results} = data
      dispatch({type: 'DISPLAY_LIST', payload: results})
    }
    catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}>
        {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}