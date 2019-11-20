import { getAllFilm } from "../../services/movieSevice"
"

export const reduxAction = (type,data) => {
  return {type, data}
}

// Quản lý mọi thứ về film
//Lấy danh sách phim
export const fetchAllMovies = () => {
  return dispatch => {
    getAllFilm()
    .then(res => {
      dispatch(reduxAction(GET_MOVIES, res.data));
    })
    .catch(err => {
      console.log(err);
    })
  }
}
//thêm movie
export const addMovies = () => {
  return dispatch => {
    AddMovie()
    .then(res => {
      dispatch(reduxAction(ADD_MOVIES, res.data));
    })
    .catch(err => {
      console.log(err);
    })
  }
}
//update movie
export const updateMovies = () => {
  return dispatch => {
    UpdateMovie()
    .then(res => {
      dispatch(reduxAction(ADD_MOVIES, res.data));
    })
    .catch(err => {
      console.log(err);
    })
  }
}

// End quản lý film
/************** */



// Quản lý user
//User đăng nhập
export const loginUser = () => {
  return dispatch => {
    Login()
    .then(res => {
      dispatch(reduxAction(LOG_IN, res.data));
    })
    .catch(err => {
      console.log(err);
    })
  }
}
//tạo account 
export const createUser = () => {
  return dispatch => {
    CreateUser()
    .then(res => {
      dispatch(reduxAction(CREATE_USER, res.data));
    })
    .catch(err => {
      console.log(err);
    })
  }
}
//cập nhật user
export const updateUser = () => {
  return dispatch => {
    UpdateUser()
    .then(res => {
      dispatch(reduxAction(UPDATE_USER,res.data));
    })
    .cath(err => {
      console.log(err);
    })
  }
}
//danh sách user
export const detailUser = () => {
  return dispatch => {
    DetailUser()
    .then(res => {
      dispatch(reduxAction(DETAIL_USER,res.data));
    })
    .cath(err => {
      console.log(err);
    })
  }
}
//thêm người dùng
export const addUser = () => {
  return dispatch => {
    AddUser()
    .then(res => {
      dispatch(reduxAction(ADD_USER,res.data));
    })
    .cath(err => {
      console.log(err);
    })
  }
}


export const typeUser = () => {
  return dispatch => {
    UserType()
    .then(res => {
      dispatch(reduxAction(TYPE_USER,res.data));
    })
    .cath(err => {
      console.log(err);
    })
  }
}
// End quản lý user *//////////