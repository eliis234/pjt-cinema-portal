import { GET_MOVIES } from "../constantReducer"

const initState = {
  movies: []
}
export const movieReducer = (state = initState, {type, data}) => {
  switch (type) {
    case GET_MOVIES: {
      let movies = data
      state.movies = movies;
      return {...state}
    }
    default: return state
  }
}