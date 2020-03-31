import { 
    REGISTER_USER,
    LOGIN_USER,
    AUTH_USER,
    FORGET,
    PASS,
    logoutuser,
    SET_HEADER
} from "../actions/types";

export default function(state={},action){
    switch(action.type){ 
        case REGISTER_USER:
        return {...state, register: action.payload }
        case LOGIN_USER:
            return {...state,member:action.payload}  
            case SET_HEADER:
            return {...state,setheader:action.payload}
         case AUTH_USER:
             return {...state, userData: action.payload }   
               
         case logoutuser:
             return  {...state,userData:{
                
             },member:{} }
        case FORGET:
                return{
                    ...state,forget:action.payload
                }
                case PASS:
                    return{
                        ...state,forgetpass:action.payload
                    }
         default:
            return state;
    }
}