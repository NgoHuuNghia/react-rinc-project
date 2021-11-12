const reducer = (state, action) => {
    if (action.type === 'DISPLAY_LIST'){
        return {...state, featuredList: action.payload, loading: false}
    }

    throw new Error('no matching type')
}

export default reducer