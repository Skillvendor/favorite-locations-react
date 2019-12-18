import { get } from './query'

export async function getFavoritesQuery(){
  let favorites = await get('api/favorites/spots')

  return favorites.data
}
