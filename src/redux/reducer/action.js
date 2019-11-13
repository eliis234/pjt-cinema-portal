import { getAllFilm } from "../../services/movieSevice"
import { GET_MOVIES } from "../constantReducer"

export const reduxAction = (type,data) => {
  return {type, data}
}

export const fetchAllMovies = () => {
  return dispatch => {
    getAllFilm()
    .then(res => {
      dispatch(reduxAction(GET_MOVIES, res.data));
    })
    .catch(err => {
      console.log(err);
    })
  }
}