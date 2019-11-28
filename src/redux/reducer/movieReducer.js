import { GET_MOVIES } from "../constantReducer"
import { ADD_MOVIES } from "../constantReducer"
import {UPDATE_MOVIES} from "../constantReducer"
const initState = {
  movies: []
}
export const movieReducer = (state = initState, {type, data}) => {
  switch (type) {
    //lấy danh sách film
    case GET_MOVIES: {
      let movies = data
      state.movies = movies;
      return {...state}
    }
    //thêm film
    case ADD_MOVIES: {
      let movies = data
      state.movies = movies;
      return {...state}
    }
     //loại film
    case UPDATE_MOVIES: {
      let movies = data
      state.movies = movies;
      return {...state}
    }
    default: return state
  }
}