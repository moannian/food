// redux的方法
import { ADD, ADD_IMAGE } from './type'
export const add = (item) => {
        return {
            type: ADD,
            item
        }
    }
    //异步操作
const add_image = (item) => {
    return {
        type: ADD_IMAGE,
        item
    }
}
export const getImg = (list) => {
    return (dispatch) => {
        setInterval(() => {
            dispatch(add_image(list))
        }, 1000)
    }
}