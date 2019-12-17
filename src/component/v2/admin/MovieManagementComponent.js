import React, { Component } from "react";
import "./style/movieManagement.scss";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { fetchAllMovies } from "../../../redux/reducer/action";
import * as _ from "lodash";
import { delFilm } from '../../../services/movieSevice';

class MovieManagementComponent extends Component {
  constructor(props) {
    super(props);
    this.onRowDelete = this.onRowDelete.bind(this);
  }

  render() {
    const { columns, data } = this.getDataRenderTable();
    console.log(this.props.movies);
    return (
      <div className="cm-movie-management">
        <div className="title__user">
          <h2>Quản lý Phim</h2>
        </div>
        <MaterialTable
          title=""
          columns={columns}
          data={data}
          editable={{
            onRowAdd: this.onRowAdd,
            onRowUpdate: this.onRowUpdate,
            onRowDelete: this.onRowDelete
          }}
        />
      </div>
    );
  }
  // handle
  getDataRenderTable() {
    // biDanh: "phuc"
    // moTa: "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law."
    // hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/phuc_gp08.jpg"
    const res = {
      columns: [
        { title: "Ten Phim", field: "tenPhim" },
        { title: "Ngay Khoi Chieu", field: "ngayKhoiChieu" },
        { title: "Ma Phim", field: "maPhim", type: "numeric" },
        { title: "Danh Gia", field: "danhGia", type: "numeric" },
        { title: "Ma Nhom", field: "maNhom" }
      ],
      data: []
    };
    res.data = _.get(this, "props.movies", []);
    return res;
  }

  //handle
  addMovie(data) {

  }

  removeMovie(maPhim) {
    delFilm(maPhim).then(res => {
      console.log(res);
    }).catch(error => {
      // console.log(error);
      alert('fuck thai cho dien')
    })
  }
  // event
  onRowAdd(newData) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        this.setState(prevState => {
          const data = [...prevState.data];
          data.push(newData);
          // this.addMovie(newData)
          return { ...prevState, data };
        });
      }, 600);
    });
  }

  onRowUpdate(newData, oldData) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        if (oldData) {
          this.setState(prevState => {
            const data = [...prevState.data];
            data[data.indexOf(oldData)] = newData;
            return { ...prevState, data };
          });
        }
      }, 600);
    });
  }

  onRowDelete(oldData) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        console.log(oldData.maPhim);
        this.removeMovie(oldData.maPhim);
        // this.setState(prevState => {
        //   const data = [...prevState.data];
        //   data.splice(data.indexOf(oldData), 1);
        //   return { ...prevState, data };
        // });
      }, 600);
    });
  }

  componentDidMount() {
    this.props.dispatch(fetchAllMovies);
  }
}

const mapStateToProps = state => {
  return {
    movies: _.get(state, "movie.movies", [])
  };
};

export default connect(mapStateToProps, null)(MovieManagementComponent);
