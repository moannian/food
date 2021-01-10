import { request } from './request'
export function Get() {
    return request({
        url: "/mock/home"
    })
}