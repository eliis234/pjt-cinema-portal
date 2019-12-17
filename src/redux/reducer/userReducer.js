import { LOG_IN } from "../constantReducer";
import { CREATE_USER } from "../constantReducer";
import { UPDATE_USER } from "../constantReducer";
import { DETAIL_USER } from "../constantReducer";
import { ADD_USER } from "../constantReducer";
import { TYPE_USER } from "../constantReducer";
import { setAccessToken } from "../../services/myMethod";

const initState = {
  users: [],
  userLogin: {}
};
export const userReducer = (state = initState, { type, data }) => {
  switch (type) {
    //LOG_IN
    case LOG_IN: {
      setAccessToken(data.accessToken);
      return { ...state, userLogin: data };
    }
    //CREATE_USER
    case CREATE_USER: {
      let users = data;
      state.users = users;
      return { ...state };
    }
    //UPDATE_USER
    case UPDATE_USER: {
      let users = data;
      state.users = users;
      return { ...state };
    }
    //DETAIL_USER
    case DETAIL_USER: {
      let users = data;
      state.users = users;
      return { ...state };
    }
    //ADD_USER
    case ADD_USER: {
      let users = data;
      state.users = users;
      return { ...state };
    }
    //TYPE_USER
    case TYPE_USER: {
      let users = data;
      state.users = users;
      return { ...state };
    }
    default:
      return state;
  }
};
