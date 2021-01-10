import { createStore, applyMiddleware } from 'redux' //applyMiddleware redux中的异步支持工作
import thunk from 'redux-thunk' //支持异步
import { composeWithDevTools } from 'redux-devtools-extension' //调试工具的插件
import redusers from './redusers'
const store = createStore(
    redusers,
    composeWithDevTools(applyMiddleware(thunk))
)
export default store