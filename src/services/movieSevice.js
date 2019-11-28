import { get, post } from "./myMethod"

export const getAllFilm = ()=>{
  return get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP08')
}

export const AddMovie = ()=>{
  return post('/QuanLyPhim/ThemPhim')
}

export const UpdateMovie = ()=>{
  return post('/QuanLyPhim/CapNhatPhim')
}
const movieService = {
  getAllFilm, AddMovie, UpdateMovie
}

export default movieService