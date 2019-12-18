import React from 'react';
import Table from './table';
import CountryConnected from '../containers/country'
import { getCountriesQuery, postCountriesQuery } from '../queries/country'

class Countries extends React.Component {
  constructor() {
    super()

    this.state = {
      country: {
        name: 'ccc'
      }
    }
  }

  componentDidMount() {
    const {
      setCountries,
    } = this.props

    const countriesPromise = getCountriesQuery()
    countriesPromise.then(countries => setCountries(countries))
  }

  createCountry = () => {
    const {
      appendNewCountry,
    } = this.props

    const createCountryPromise = postCountriesQuery({ country: { name: this.state.country.name}})
    createCountryPromise.then(country => appendNewCountry(country))
  }

  handleChange(value) {
    this.setState({country: {name: value}});
  }

  render() {
    const {
      countries = [],
    } = this.props

    const countryKeys = Object.keys(countries[0] || {})
    return (
      <React.Fragment>
        <Table>
          <tr>
            {(countryKeys || []).map(el => <th key={`countryKey_${el}`}> {el} </th>)}
          </tr>
            {
              (countries || []).map((el) => <CountryConnected key={`country_${el.id}`} {...el}></CountryConnected>)
            }
        </Table>
        <input
          value={this.state.country.name}
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>
        <button onClick={this.createCountry}>Add Country</button>
      </React.Fragment>
    )
  }
}



export default Countries
