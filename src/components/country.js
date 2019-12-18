import React from 'react';
import { deleteCountryQuery, updateCountryQuery} from '../queries/country'


class Country extends React.Component {
  del = () => {
    deleteCountryQuery(this.props.id)
    this.props.deleteCountry(this.props.id)
  }

  render() {
    return (
      <tr>
        <td>
          { this.props.id }
        </td>
        <td>
          <input
            value={ this.props.name }
            onChange={(e) => this.props.updateCountry({id: this.props.id, name: e.target.value})}
          ></input>
        </td>
        <td>
          { this.props.createdAt }
        </td>
        <td>
          { this.props.updatedAt }
        </td>
        <td>
          <button onClick = { this.del }>Delete country</button>

          <button onClick={ () => updateCountryQuery(this.props.id, { country: { name: this.props.name}})}>Update Country</button>
        </td>
      </tr>
    )
  }
}

export default Country
