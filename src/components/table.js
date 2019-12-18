import React from 'react'


class Table extends React.Component{
  render(){
    const {
      children
    } = this.props

    console.log(children)
    return (
      <table>
        <thead>
          { children[0] }
        </thead>
        <tbody>
          { children[1] }
        </tbody>
      </table>
    )
  }
}
export default Table
