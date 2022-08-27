const Encreament="Encreament"
const Decreament="Decreament"

export const counterReducer=(state={count:1},action)=>{
 switch(action.type)
 {
   case Encreament:
    return {
        ...state,
        count:state.count+1
    }

    case Decreament:
        return {
            ...state,
            count:state.count-1
        }
   default:
    return state        
 }
}