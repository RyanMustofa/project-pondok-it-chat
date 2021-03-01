const globalState = {
    loading: false,
    cek: false
}
export const rootReducer = (state = globalState , action) => {
    if(action.type === 'CHANGE_LOADING'){
        return{
            ...state,
            loading: action.value
        }
    }
    if(action.type === 'CHANGE_CEK'){
        return{
            ...state,
            cek: action.value
        }
    }
    return state
}
