
import {ADD_TO_CART} from './Constant'

export const cartData=(data=[],action)=> {

    if (action.type === ADD_TO_CART){
        console.warn(" ADD_TO_CART  condition", action)

return data
    } else {
                 return "no action"
    }


}