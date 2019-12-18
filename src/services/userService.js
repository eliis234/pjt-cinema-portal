import { get, post, put ,deleted} from "./myMethod"


export const Login = (data) => {
  return post('/QuanLyNguoiDung/DangNhap', data)
}

export const CreateUser = (data) => {
  return post('/QuanLyNguoiDung/DangKy', data)
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
export const delUser = (TaiKhoan) => {
  return deleted(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${TaiKhoan}`)
}

const userService = {
  Login, CreateUser, UpdateUser, ListUser, UserDetail, AddUser, UserType, delUser
}

export default userService