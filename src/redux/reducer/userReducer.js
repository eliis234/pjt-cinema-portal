import { LOG_IN } from "../constantReducer"
import { CREATE_USER } from "../constantReducer"
import { UPDATE_USER } from "../constantReducer"
import { DETAIL_USER } from "../constantReducer"
import { ADD_USER } from "../constantReducer"
import {TYPE_USER} from "../constantReducer"

const initState = {
  users: []
}
export const userReducer = (state = initState, {type, data}) => {
  switch (type) {
     //LOG_IN
     case LOG_IN: {
      let users = data
      state.users = users;
      return {...state}
    }
     //CREATE_USER
    case CREATE_USER: {
      let users = data
      state.users = users;
      return {...state}
    }
    //MANAGE_USER
    case MANAGE_USER: {
      let users = data
      state.users = users;
      return {...state}
    }
    //DETAIL_USER 
    case DETAIL_USER: {
      let users = data
      state.users = users;
      return {...state}
    }
    //ADD_USER 
    case ADD_USER: {
      let users = data
      state.users = users;
      return {...state}
    }
    //TYPE_USER 
    case TYPE_USER: {
      let users = data
      state.users = users;
      return {...state}
    }
    default: return state
  }

}