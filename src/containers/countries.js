import { connect } from 'react-redux'
import Countries from '../components/countries'
import { setCountries, appendCountry } from '../actions/countries'

const mapStateToProps = state => ({
  countries: state.countryReducer.countries,
})

const mapDispatchToProps = dispatch => ({
  // actions :  bindActionCreators({
  //   getCountries
  // }, dispatch)
  setCountries: (countries)  => dispatch(setCountries(countries)),
  appendNewCountry: (country) => dispatch(appendCountry(country)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries)
