import { get, post } from "./myMethod"

export const getAllFilm = ()=>{
  return get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP08')
}

export const addMovie = ()=>{
  return post('/QuanLyPhim/ThemPhim')
}

export const updateMovie = ()=>{
  return post('/QuanLyPhim/CapNhatPhim')
}
const movieService = {
  getAllFilm, addMovie, updateMovie
}

export default movieService