const INITIAL_STATE = {
  countries: [],
}

export default function reducer(state = INITIAL_STATE, action){
  let newCountryArray
  let countryIndex
	switch(action.type){
		case 'GET_COUNTRIES':
      state.countries = action.countries

      return {...state}
    case 'APPEND_COUNTRY':
      newCountryArray = [...state.countries]
      newCountryArray.push(action.country)

      return {...state, countries: newCountryArray}
    case 'DELETE_COUNTRY':
      state.countries = state.countries.filter( (country) => country.id !== action.countryId)

      return {...state}
    case 'UPDATE_COUNTRY':
      countryIndex = state.countries.findIndex( country => country.id === action.country.id)
      state.countries[countryIndex].name = action.country.name
      state.countries = [...state.countries]
      return {...state}
		default:
      return state
  }
}
