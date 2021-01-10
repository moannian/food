import axios from 'axios'
import '../mock/mock'
import '../mock/mock2'
export function get(url) {
    return axios.get(url)
}