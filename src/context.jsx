import React, { useContext, useReducer, useEffect, useCallback } from 'react'
import reducer from './reducer'
import sublinks from './assets/tempData'

const BasicUrl = 'https://api.rawg.io/api/games'
// see rawg api doc for more info on how to use it https://api.rawg.io/docs/#operation/games_list
const APIkey = '?key=8988510ce7664ac580a6c3b238a28e69'
const AppContext = React.createContext()

const initialState = {
  loading: true,
  expandNavLink: false,
  submenu: {
    sublinks: sublinks,
    submenuOpen: false,
    subpage: {page:'', links:[]},
    location: {},
  },
  sliderIndexMain: (0),
  sliderIndexRecomended: (0),
  totalGamesCount: 0,
  featuredList: [],
  featuredListRecent: [],
  featuredListRecommended : [],
  featuredListSim: [],
  tabActives: {
    tabToggle: '',
    tabCurrent: (0),
  },
  searches: {
    searchTerm: '',
    searchList: [],
    searchCount: 0,
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const response = async ({
    listSize = 8, listGenres = null, listOrder = '', 
    listPeroid = 2, reducerType = 'DISPLAY_FEATURED_LIST', listSearch = null,
    listType// !Mandatory
    }={}) => {
    let size = (number) => '&page_size=' + number
    let genres = (string) => {
      if (typeof string === 'string' || string instanceof String) return '&genres=' + string
      else return ''
    }
    let ordering = (string) => '&ordering=' + string
    let date = (peroid) => {
      if(peroid){
        const today  = new Date();
        const dd = String(today.getDate()).padStart(2, '0')
        const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
        const yyyy = today.getFullYear()
        const yyyyPeroid = yyyy - peroid

        return '&dates=' + yyyyPeroid + '-' + mm + '-' + dd + ',' + yyyy + '-' + mm + '-' + dd
      } else return ''
    }
    let search = (string) => listSearch ? '&search=' + string : ''

    const response = await fetch(`${BasicUrl}${APIkey}${size(listSize)}${genres(listGenres)}${ordering(listOrder)}${date(listPeroid)}${search(listSearch)}`)
    const data = await response.json()
    const {results} = data
    
    if(listType === 'special' || listType === 'search'){
      const {count} = data
      dispatch({type: reducerType, payload: {results, listType, count}})

    } else dispatch({type: reducerType, payload: {results, listType}})
  }

  useEffect(() => {
    try {
      response({listOrder: '-rating',listPeroid: 1, listType: 'featured'})
      response({listPeroid: null, listType: 'special'})
      response({listOrder: '-metacritic', listType: 'recommended'})
      response({listGenres: 'simulation', listType: 'sim'})
    }
    catch (error){
      throw new Error(error)
    }
  }, [])
  useEffect(() => {
    try {
      response({listSize:16, listOrder: '-rating', listSearch: state.searches.searchTerm, listType: 'search'})
    }
    catch (error){
      throw new Error(error)
    }
  }, [state.searches.searchTerm])

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

  const openSubmenu = (text, coordinates) => dispatch({type: 'OPENSUBMENU', payload: {text, coordinates}})
  const closeSubmenu = (e) => {if (!e.target.classList.contains('nav-links')) dispatch({type: 'CLOSESUBMENU'})}

  const toggleIndex = (toggleType, sliderType) => dispatch({type: 'TOGGLE_INDEX', payload: {toggleType, sliderType}})

  const toggleTab = ( data, type ) => dispatch({type: 'TOGGLE_TAB', payload: {data, type}})

  const hoverTabItem = (id, toggle) => dispatch({type: 'HOVER_CURRENT_TAB_ITEM', payload: {id, toggle}})

  const ToggleNavLink = () => dispatch({type: 'TOGGLE_NAV_LINK'})

  const RunSearch = (searchTerm) => dispatch({type: 'RUN_SEARCH', payload: searchTerm})

  //? End of reducer's functions


  const ToTop = () => window.scrollTo(0, 0)

  return (
    <AppContext.Provider
      value={{
        ...state,

        openSubmenu,
        closeSubmenu,
        toggleIndex,
        toggleTab,
        hoverTabItem,
        ToggleNavLink,
        ToTop,
        RunSearch,
      }}>
        {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}