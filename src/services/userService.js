import { get, post, put } from "./myMethod"


export const Login = ()=>{
  return post('/QuanLyNguoiDung/DangNhap')
}

export const CreateUser = ()=>{
  return post('/QuanLyNguoiDung/DangKy')
}

export const UpdateUser = ()=>{
  return put('/QuanLyNguoiDung/CapNhatThongTinNguoiDung')
}

export const ListUser = ()=>{
  return get('/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08')
}

export const UserDetail = ()=>{
  return post('/QuanLyNguoiDung/ThongTinTaiKhoan')
}

export const AddUser = ()=>{
  return post('/QuanLyNguoiDung/ThemNguoiDung')
}

export const UserType = ()=>{
 return post('/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung')
}
const userService = {
  Login, CreateUser, UpdateUser, ListUser,UserDetail,AddUser,UserType
}

export default userService