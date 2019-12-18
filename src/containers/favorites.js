import { connect } from 'react-redux'

import Favorites from '../components/favorites'
import { getFavorites } from '../actions/favorites'


const mapStateToProps = state => ({
  favorites: state.favoriteReducer.favorites,
})

const mapDispatchToProps = dispatch => ({
  getFavorites: favorites => dispatch(getFavorites(favorites))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites)
