import { get, post, deleted } from "./myMethod"

export const ListHistory = () => {
  return get('/QuanLyDatVe/LayDanhSachPhongVe'+ "?MaLichChieu=24581" )
}

const historyService = {ListHistory}

export default historyService