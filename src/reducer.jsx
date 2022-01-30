const reducer = (state, action) => {

    if (action.type === 'DISPLAY_FEATURED_LIST'){
        const type = action.payload.listType
        const results = action.payload.results
        if (type === 'featured'){
            return {
                ...state, 
                featuredList: results,
                tabActives: {
                    tabToggle: type,
                    tabCurrent: results[0].id
                },
                loading: false,
            }
        }
        if (type === 'special') return {...state, featuredListRecent: results, loading: false, totalGamesCount: action.payload.count}
        if (type === 'recommended') return {...state, featuredListRecommended: results, loading: false}
        if (type === 'sim') return {...state, featuredListSim: results, loading: false}
        if (type === 'search') return {...state, searches: {searchTerm: state.searches.searchTerm, searchList: results, searchCount: action.payload.count}, loading: false}
    }

    if (action.type === 'SET_LIST_POSITION'){
        if (action.payload === 'sliderMain'){
            const lastIndex = state.featuredList.length - 1
            if (state.sliderIndexMain < 0) return {...state, sliderIndexMain: lastIndex}
            if (state.sliderIndexMain > lastIndex) return {...state, sliderIndexMain: 0}
            else return {...state}
        }
        if (action.payload === 'sliderRecomended'){
            const lastIndex = state.featuredListRecommended.length - 1
            if (state.sliderIndexRecomended < 0) return {...state, sliderIndexRecomended: lastIndex}
            if (state.sliderIndexRecomended > lastIndex) return {...state, sliderIndexRecomended: 0}
            else return {...state}
        }
    }

    if (action.type === 'OPENSUBMENU'){
        const {sublinks} = state.submenu
        const currentSubpage = sublinks.find((item) => item.page === action.payload.text)

        return {...state, submenu: {sublinks: sublinks, submenuOpen: true, subpage: currentSubpage, location: action.payload.coordinates}}
    }
    if (action.type === 'CLOSESUBMENU') return {...state, submenu: {...state.submenu, submenuOpen: false}}

    if (action.type === 'TOGGLE_INDEX'){
        if (action.payload.toggleType === 'increase'){
            if (action.payload.sliderType === 'sliderMain') return {...state, sliderIndexMain: state.sliderIndexMain + 1}
            if (action.payload.sliderType === 'sliderRecomended') return {...state, sliderIndexRecomended: state.sliderIndexRecomended + 1}
        }
        if (action.payload.toggleType === 'decrease'){
            if (action.payload.sliderType === 'sliderMain') return {...state, sliderIndexMain: state.sliderIndexMain - 1}
            if (action.payload.sliderType === 'sliderRecomended') return {...state, sliderIndexRecomended: state.sliderIndexRecomended - 1}
        }
    }

    if (action.type === 'TOGGLE_TAB'){
        if (action.payload.type === 'tabToggle'){
            const data = action.payload.data
            if (data === 'featured') return {...state, tabActives: {tabToggle: data, tabCurrent: state.featuredList[0].id}}
            if (data === 'special') return {...state, tabActives: {tabToggle: data, tabCurrent: state.featuredListRecent[0].id}}
            if (data === 'recommended') return {...state, tabActives: {tabToggle: data, tabCurrent: state.featuredListRecommended[0].id}}
            if (data === 'sim') return {...state, tabActives: {tabToggle: data, tabCurrent: state.featuredListSim[0].id}}
        }
        if (action.payload.type === 'tabCurrent') return {...state, tabActives: {tabCurrent: action.payload.data}}
    }

    if (action.type === 'HOVER_CURRENT_TAB_ITEM') return {...state, tabActives: {tabToggle: action.payload.toggle, tabCurrent: action.payload.id}}

    if (action.type === 'TOGGLE_NAV_LINK') return {...state, expandNavLink: !state.expandNavLink}

    if (action.type === 'RUN_SEARCH') return {...state, searches: {searchTerm: action.payload, searchList: state.searches.searchList}}

    throw new Error('no matching type ' + Error)
}

export default reducer