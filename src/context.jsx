import React, { useContext, useReducer, useEffect, useCallback } from 'react'
import reducer from './reducer'

const BasicUrl = 'https://api.rawg.io/api/games'
// see rawg api doc for more info on how to use it https://api.rawg.io/docs/#operation/games_list
const APIkey = '?key=8988510ce7664ac580a6c3b238a28e69'
const AppContext = React.createContext()

const initialState = {
  loading: true,
  expandNavLink: false,
  sliderIndexMain: (0),
  sliderIndexRecomended: (0),
  featuredList: [],
  featuredListRecent: [],
  featuredListRecommended : [],
  featuredListSim: [],
  tabActives: {
    tabToggle: '',
    tabCurrent: (0),
  },
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    try {
      const response = async (listSize, listGenres, listOrder, listPeroid, reducerType, listType) => {
        let size = (number) => '&page_size=' + number
        let genres = (string) => {
          if (typeof string === 'string' || string instanceof String){
            return '&genres=' + string
          } else {
            return ''
          }
        }
        let ordering = (string) => '&ordering=' + string
        let date = (peroid) => {
          const today  = new Date();
          const dd = String(today.getDate()).padStart(2, '0')
          const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
          const yyyy = today.getFullYear()
          const yyyyPeroid = yyyy - peroid
    
          return '&dates=' + yyyyPeroid + '-' + mm + '-' + dd + ',' + yyyy + '-' + mm + '-' + dd
        }

        const response = await fetch(`${BasicUrl}${APIkey}${size(listSize)}${genres(listGenres)}${ordering(listOrder)}${date(listPeroid)}`)
        const data = await response.json()
        const {results} = data

        dispatch({type: reducerType, payload: {results, listType}})
      }

      response(8, null, '-rating', 2, 'DISPLAY_FEATURED_LIST', 'featured')
      response(8, null, '', 3 , 'DISPLAY_FEATURED_LIST', 'special')
      response(8, null, '-metacritic', 3 , 'DISPLAY_FEATURED_LIST', 'recommended')
      response(8, 'simulation', '', 3 , 'DISPLAY_FEATURED_LIST', 'sim')
      
    }
    catch (error){
      throw new Error(error)
    }
  }, [])

  useEffect(() => {
    dispatch({type: 'SET_LIST_POSITION', payload: 'sliderMain'})

    let slider = setInterval(() => {
      dispatch({type: 'TOGGLE_INDEX', payload: {toggleType: 'increase', sliderType: 'sliderMain'}})
    }, 5000)
    return () => {clearInterval(slider)}
  }, [state.sliderIndexMain])

  useEffect(() => {
    dispatch({type: 'SET_LIST_POSITION', payload: 'sliderRecomended'})

    let slider = setInterval(() => {
      dispatch({type: 'TOGGLE_INDEX', payload: {toggleType: 'increase', sliderType: 'sliderRecomended'}})
    }, 8000)
    return () => {clearInterval(slider)}
  }, [state.sliderIndexRecomended])

  const toggleIndex = (toggleType, sliderType) => {
    dispatch({type: 'TOGGLE_INDEX', payload: {toggleType, sliderType}})
  }

  const toggleTab = ( data, type ) => {
    dispatch({type: 'TOGGLE_TAB', payload: {data, type}})
  }

  const hoverTabItem = (id, toggle) => {
    dispatch({type: 'HOVER_CURRENT_TAB_ITEM', payload: {id, toggle}})
  }

  const ToggleNavLink = () => {
    dispatch({type: 'TOGGLE_NAV_LINK'})
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleIndex,
        toggleTab,
        hoverTabItem,
        ToggleNavLink,
      }}>
        {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}