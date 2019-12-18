const INITIAL_STATE = {
  favorites: [],
}

export default function reducer(state = INITIAL_STATE, action){
  switch(action.type){
    case 'GET_FAVORITES':
      state.favorites = action.favorites
      return {...state}
    default:
      return state
  }
}
