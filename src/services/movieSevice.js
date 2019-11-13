import { get } from "./myMethod"

export const getAllFilm = ()=>{
  return get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP05')
}

const movieService = {
  getAllFilm
}

export default movieService