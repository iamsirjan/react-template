import actions from "./action";


interface User {
    id:number;
    name: string;
    address: string;
    phone:number;
    email:string;
    companyname:string;
    username:string;
  }
const initialState = {
  loading: false,
  allUsers: [],
  newUsers:[]
};

const UserReducer = (state = initialState, action:any) => {
  switch (action.type) {
    // Get all user
    case actions.GET_USERS_REQ:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_USERS_SUC:
      return {
        ...state,
        loading: false,
        allUsers: action.details,
      };
    case actions.GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    // delete users

    case actions.DLT_USERS_REQ:
      return {
        ...state,
      };

    case actions.DLT_USERS_SUC:
      return {
        ...state,
        allUsers: state?.allUsers?.filter(
          (data:User) => data?.id !== action.details
        ),
      };

    case actions.DLT_USERS_FAIL:
      return {
        ...state,
        message: action.message,
      };

    // edit users

    

    case actions.EDIT_USERS_REQ:
      return {
        ...state,
      };

    case actions.EDIT_USERS_SUC:
      return {
        ...state,
        userId: action.details,
        allUsers: state?.allUsers,
      };

    case actions.EDIT_USERS_FAIL:
      return {
        ...state,
        message: action.message,
      };

      // add user

      case actions.ADD_USERS_REQ:
        return {
          ...state,
        };
  
      case actions.ADD_USERS_SUC:
        return {
          ...state,
          allUsers: [...state.allUsers,action.details],
          newUsers: [...state.newUsers,action.details],
          
        };
  
  
      case actions.ADD_USERS_FAIL:
        return {
          ...state,
          message: action.message,
        };
  

    // default state

    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;
