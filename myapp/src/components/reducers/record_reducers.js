import { 
    ADDRECORD,
    GETRECORD,
    ALLALUM,
    SEARCHYR,
    ADDAWARD,
    ALLAWARDS,
    WRITEUSER,
    ENDSESSION,
    ADDACADEMIC,
    ALLACADEMIC,
    EDITDATA,
    ADDSKILL
} from "../actions/types";

export default function(state={},action){
    switch(action.type){ 
        case EDITDATA:
            return {...state, edit:action.payload }
        case ADDRECORD:
            return {...state, award:action.payload }
        case ADDSKILL:
            return {...state, skill:action.payload }
        case ADDACADEMIC:
            return {...state, academic:action.payload }
        case ALLACADEMIC:
            return {...state, allacademic:action.payload }  
        case ENDSESSION:
            return {...state, endsession:action.payload }
        case GETRECORD:
            return {...state, rec:action.payload }
        case WRITEUSER:
            return {...state, write:action.payload }
        case ADDAWARD:
            return {...state, news:action.payload }
        case ALLALUM:
            return {...state, all:action.payload }
        case ALLAWARDS:
            return {...state, allnews:action.payload }
        case SEARCHYR:
            return {...state, searchresult:action.payload }
              
        
        default:
            return state;
    }
}
