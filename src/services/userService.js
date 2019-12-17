import { get, post, put ,deleted} from "./myMethod"


export const Login = () => {
  return post('/QuanLyNguoiDung/DangNhap')
}

export const CreateUser = () => {
  return post('/QuanLyNguoiDung/DangKy')
}

export const UpdateUser = (data) => {
  return put('/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data)
}

export const ListUser = () => {
  return get('/QuanLyNguoiDung/LayDanhSachNguoiDung')
}

export const UserDetail = () => {
  return post('/QuanLyNguoiDung/ThongTinTaiKhoan')
}

export const AddUser = (data) => {
  return post('/QuanLyNguoiDung/ThemNguoiDung',data)
}

export const UserType = () => {
  return get('/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung')
}
export const delUser = (maPhim) => {
  return deleted('/QuanLyPhim/XoaPhim', maPhim)
}

const userService = {
  Login, CreateUser, UpdateUser, ListUser, UserDetail, AddUser, UserType, delUser
}

export default userService