import React from 'react';
import User from './user';
import Table from './table';

class Users extends React.Component{
  render(){
    const {
      users,
    } = this.props

    const userKeys = Object.keys(users[0])
    return (
      <Table>
        <tr>
          {(userKeys || []).map(el => <th key={`userHeaders_${el}`}> {el}</th>) }
        </tr>
        {(users || []).map(el => <User key={`user_${el.id}`} {...el} > </User>)}
      </Table>
    )
  }
}
export default Users
