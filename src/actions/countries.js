export function setCountries(countries){
	return {
		type: 'GET_COUNTRIES',
		countries
	}
}

export const appendCountry = (country) => ({
  type: 'APPEND_COUNTRY',
  country
})

export const deleteCountry = (countryId) => ({
  type: 'DELETE_COUNTRY',
  countryId
})

export const updateCountry = (country) => ({
  type: 'UPDATE_COUNTRY',
  country
})
