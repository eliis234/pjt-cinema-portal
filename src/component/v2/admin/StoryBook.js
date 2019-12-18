import React, { Component } from 'react';
import './style/userManagement.scss'
import MaterialTable from 'material-table';
import { ListHistory } from '../../../services/historyService';

class StoryBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        { title: 'Mã ghế', field: 'maGhe' },
        { title: 'Tên ghế', field: 'tenGhe' },
        { title: 'Loại ghế', field: 'loaiGhe' },
        { title: 'Mã ghế', field: 'maGhe' },
        { title: 'Mã rạp', field: 'maRap' },
        { title: 'STT', field: 'stt' },
        { title: 'Tài khoản người đặt', field: 'taiKhoanNguoiDat'},
      ],
      data: []
    }
  }
  render() {
    return (
      <div className="cm-user-management">
        <div class="title__user">
          <h2>Lịch sử đặt vé</h2>
        </div>
        <MaterialTable
          title=""
          columns={this.state.columns}
          data={this.state.data}
        />
      </div>
    );
  }

  componentDidMount() {
    ListHistory().then(res => {
      const { data } = res
      let mangvedat = []
      data.danhSachGhe.map(data=>{
        if (data.taiKhoanNguoiDat!=null) {
          mangvedat.push(data)
        }
      })
      console.log(mangvedat);
      

      this.setState({ data:mangvedat})

    })
  }
}

export default StoryBook;