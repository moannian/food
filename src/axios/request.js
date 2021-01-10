// 配置网络请求
import axios from 'axios';
export const request = ((config) => {
    const instance = axios.create({
            baseURL: "http://123.207.32.32:8000",
            timeout: 2000
        })
        // 配置拦截器
    instance.interceptors.request.use(config => {
        // 拦截成功之后一定要把拦截的数据返回，否则会出问题
        return config
    }, error => {

    })
    return instance(config)
})
export default Request