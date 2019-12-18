import React from 'react';

class User extends React.Component{
  render(){
    const {
      name,
    } = this.props

    return(
      <React.Fragment>
        <tr>
          <td>
            { name }
          </td>
        </tr>
      </React.Fragment>
    )
  }
}

export default User
