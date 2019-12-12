import React, { Component } from "react";
import "./style/movieManagement.scss";
import MaterialTable from "material-table";
import movieService from "../../../services/movieSevice";

class MovieManagementComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Name", field: "name" },
        { title: "Surname", field: "surname" },
        { title: "Birth Year", field: "birthYear", type: "numeric" },
        {
          title: "Birth Place",
          field: "birthCity",
          lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
        }
      ],
      data: [
        { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
        {
          name: "Zerya Betül",
          surname: "Baran",
          birthYear: 2017,
          birthCity: 34
        }
      ]
    };
  }
  render() {
    return (
      <div className="cm-movie-management">
        <div className="title__user">
          <h2>Quản lý Phim</h2>
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

  onRowAdd(newData) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        this.setState(prevState => {
          const data = [...prevState.data];
          data.push(newData);
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
        this.setState(prevState => {
          const data = [...prevState.data];
          data.splice(data.indexOf(oldData), 1);
          return { ...prevState, data };
        });
      }, 600);
    });
  }

  componentDidMount(){
    movieService.getAllFilm().then(res => {
      const {data} = res;
      console.log(data);
      
    })
  }
}

export default MovieManagementComponent;
