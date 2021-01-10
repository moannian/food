import { combineReducers } from 'redux';
import { ADD, ADD_IMAGE } from './type'
const list = [

]
const redusers = (state = list, action) => {
    switch (action.type) {
        case ADD:
            return [action.item, ...state] //添加数组
        case ADD_IMAGE:
            return action.item

        default:
            return state
    }

}
export default combineReducers({ redusers })