import { get, post, deleted } from "./myMethod"

export const delFilm = (maPhim)=>{
  return deleted('/QuanLyPhim/XoaPhim', maPhim)
}

export const getAllFilm = ()=>{
  return get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP08')
}

export const getDetailFilm = (maPhim)=>{
  return get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
}

export const addMovie = ()=>{
  return post('/QuanLyPhim/ThemPhim')
}

export const updateMovie = ()=>{
  return post('/QuanLyPhim/CapNhatPhim')
}

export const getDetailRooms = (maLichChieu)=>{
  return get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
}

export const bookingTicker = (data)=>{
  return post(`/QuanLyDatVe/DatVe`, data)
}
const movieService = {
  getAllFilm, addMovie, updateMovie
}

export default movieService