import { get, post, deleted } from "./myMethod"

export const delFilm = (maPhim)=>{
  return deleted('/QuanLyPhim/XoaPhim', maPhim)
}

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