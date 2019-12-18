import React from 'react';
import { getFavoritesQuery } from '../queries/favorite'
import Favorite from './favorite'

class Favorites extends React.Component{
  componentDidMount() {
    console.log('sunt in componenta')
    const favoritesPromise = getFavoritesQuery()
    console.log(favoritesPromise)
    favoritesPromise.then((favorites) => {
      this.props.getFavorites(favorites)
    } )
  }


  render() {
    const {
      favorites = [],
    } = this.props

    return (
      <React.Fragment>
      {
        (favorites || []).map((el) => <Favorite key={`favorite_${el.id}`} {...el}></Favorite>)
      }
      </React.Fragment>
    )
  }

}

export default Favorites
