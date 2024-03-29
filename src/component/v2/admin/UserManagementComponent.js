import React, { Component } from 'react';
import './style/userManagement.scss'
import MaterialTable from 'material-table';
import userService from '../../../services/userService'
import * as _ from 'lodash';

class UserManagementComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        { title: 'Tài khoản', field: 'taiKhoan' },
        { title: 'Email', field: 'email' },
        { title: 'Họ tên', field: 'hoTen' },
        { title: 'Mã loại người dùng', field: 'maLoaiNguoiDung' },
        { title: 'Mã Nhóm', field: 'maNhom' },
        { title: 'SDT', field: 'soDt' },
        { title: 'Mật khẩu', field: 'matKhau' }
      ],
      data: []
    }
    this.onRowDelete = this.onRowDelete.bind(this)
    this.onRowAdd = this.onRowAdd.bind(this)
    this.onRowUpdate = this.onRowUpdate.bind(this)
  }


  render() {
    return (
      <div className="cm-user-management">
        <div class="title__user">
          <h2>Quản lý người dùng</h2>
        </div>
        <MaterialTable
          title=""
          columns={this.state.columns}
          data={this.state.data}
          editable={{
            onRowAdd: this.onRowAdd,
            onRowUpdate: this.onRowUpdate,
            onRowDelete: this.onRowDelete
          }}
        />
      </div>
    );
  }

  _fetchUser(){
    userService.ListUser().then(res => {
      const { data } = res
      console.log(data);
      this.setState({ data })
    })
  }

  removeUser(oldData) {
    userService.delUser(oldData.taiKhoan).then(res => {
      this._fetchUser()
    }).catch(error => {
      console.log(error);
      alert('Tài khoản không được xóa')
    })
  }

  updateUser(newData,oldData) {
    userService.UpdateUser(newData).then(res => {
      alert('Tk đã được update')
      this._fetchUser();      
    }).catch(error => {
      console.log(error);
      let tb = _.get(error, 'response.data', 'Tài khoản không được sửa')
      alert(tb);
    })
  }

  addUser(newData) {
    console.log(newData);
    userService.AddUser(newData).then(res => {
      alert('Tk đã được thêm')
      this._fetchUser()
    }).catch(error => {
      console.log(error);
      let tb = _.get(error, 'response.data', 'Tài khoản này đã tồn tại')
      alert(tb)
    })
  }

  // event
  onRowAdd(newData) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        this.addUser(newData);
      }, 600);
    });
  }

  onRowUpdate(newData, oldData) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        if (oldData) {
          this.updateUser(newData)
        }
      }, 600);
    });
  }

  onRowDelete(oldData) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        this.removeUser(oldData);
      }, 600);
    });
  }

  componentDidMount() {
    this._fetchUser()
  }
}

export default UserManagementComponent;