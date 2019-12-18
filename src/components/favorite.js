import React from 'react';


class Favorite extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div>{this.props.id}</div>
        <div>{this.props.spotId}</div>
        <div>{this.props.userId}</div>
      </React.Fragment>
    )
  }
}

export default Favorite;
