import { UserProps } from "../../pages/types";



const actions = {
    GET_USERS_REQ: "GET_USERS_REQ",
    GET_USERS_SUC: "GET_USERS_SUC",
    GET_USERS_FAIL: "GET_USERS_FAIL",

    ADD_USERS_REQ: "ADD_USERS_REQ",
    ADD_USERS_SUC: "ADD_USERS_SUC",
    ADD_USERS_FAIL: "ADD_USERS_FAIL",
  
    DLT_USERS_REQ: "DLT_USERS_REQ",
    DLT_USERS_SUC: "DLT_USERS_SUC",
    DLT_USERS_FAIL: "DLT_USERS_FAIL",
  
    EDIT_USERS_REQ: "EDIT_USERS_REQ",
    EDIT_USERS_SUC: "EDIT_USERS_SUC",
    EDIT_USERS_FAIL: "EDIT_USERS_FAIL",
  
    getUsers: () => ({
      type: actions.GET_USERS_REQ,
    }),
    deleteUsers: (userId:number) => ({
      type: actions.DLT_USERS_REQ,
      userId,
    }),
    addUser:(payload:UserProps) => ({
      type: actions.ADD_USERS_REQ,
      payload

    }),

    
  
    editUsers: (userdata:UserProps, userId:number) => ({
      type: actions.EDIT_USERS_REQ,
      userdata,
      userId,
    }),
  };
  
  export default actions;
  