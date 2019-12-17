import { getAllFilm, addMovie, updateMovie } from "../../services/movieSevice";
import {
  Login,
  CreateUser,
  UpdateUser,
  ListUser,
  UserDetail,
  AddUser,
  UserType
} from "../../services/userService";
import {
  DETAIL_USER,
  UPDATE_USER,
  LOG_IN,
  UPDATE_MOVIES,
  ADD_MOVIES,
  GET_MOVIES,
  ADD_USER,
  TYPE_USER,
  CREATE_USER
} from "../constantReducer";

export const reduxAction = (type, data) => {
  return { type, data };
};

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
      });
  };
};
//thêm movie
export const addMovies = () => {
  return dispatch => {
    addMovie()
      .then(res => {
        dispatch(reduxAction(ADD_MOVIES, res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
//update movie
export const updateMovies = () => {
  return dispatch => {
    updateMovie()
      .then(res => {
        dispatch(reduxAction(UPDATE_MOVIES, res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// End quản lý film
/************** */

// Quản lý user
//User đăng nhập
export const loginUser = (data) => {
  return dispatch => {
    Login(data)
      .then(res => {
        dispatch(reduxAction(LOG_IN, res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
//tạo account
export const createUser = () => {
  return dispatch => {
    CreateUser()
      .then(res => {
        dispatch(reduxAction(CREATE_USER, res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
//cập nhật user
export const updateUser = () => {
  return dispatch => {
    UpdateUser()
      .then(res => {
        dispatch(reduxAction(UPDATE_USER, res.data));
      })
      .cath(err => {
        console.log(err);
      });
  };
};
//quan ly nguoi dung user
export const userDetail = () => {
  return dispatch => {
    UserDetail()
      .then(res => {
        dispatch(reduxAction(DETAIL_USER, res.data));
      })
      .cath(err => {
        console.log(err);
      });
  };
};
//thêm người dùng
export const addUser = () => {
  return dispatch => {
    AddUser()
      .then(res => {
        dispatch(reduxAction(ADD_USER, res.data));
      })
      .cath(err => {
        console.log(err);
      });
  };
};

//danh sach loai nguoi dung
export const typeUser = () => {
  return dispatch => {
    UserType()
      .then(res => {
        dispatch(reduxAction(TYPE_USER, res.data));
      })
      .cath(err => {
        console.log(err);
      });
  };
};
//danh sach nguoi dung
export const listUser = () => {
  return dispatch => {
    ListUser()
      .then(res => {
        dispatch(reduxAction(TYPE_USER, res.data));
      })
      .cath(err => {
        console.log(err);
      });
  };
};
// End quản lý user *//////////
