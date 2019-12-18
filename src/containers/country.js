import { connect } from 'react-redux'
import Country from '../components/country'
import { deleteCountry, updateCountry } from '../actions/countries'

const mapDispatchToProps = dispatch => ({
  deleteCountry: (countryId) => dispatch(deleteCountry(countryId)),
  updateCountry: (country) => dispatch(updateCountry(country))
})

export default connect(
  null,
  mapDispatchToProps
)(Country)
