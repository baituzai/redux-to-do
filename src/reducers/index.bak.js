/**
 * Reducer其实是一个函数reducer()
 * 这个函数接收当前状态的state和action这两个参数
 * 根据state和action进行计算从而得到新的state
 * 可以把reducer理解为action的解析器
 * action描述了需要如何去修改一个state
 * 而reducer落实到代码层面，对state 进行真正的修改
 * 注意redux中的state是不可变的
 * reducer修改state并不能在原有的state上修改而是需要返回一个新的state对象
 * es6  对象扩展语法 创建一个新的state
 * 注意 当启动应用时 redux中的state初始值是undfiend
 * reducer中，所以需要先定义一个初始值
 */

import { ADD_TODO, TOGGLE_TODO, SET_TODO_TEXT, SET_FILTER} from '../actions/actionTypes'

const initialState = {
  filter: 'all',
  text: '',
  todos: [],
}

const todoApp = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos, 
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => 
            todo.id === action.id ? {...todo, completed: !todo.completed} : todo
          )
      }
    case SET_TODO_TEXT:
      return {
        ...state,
        text: action.text
      }
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter
      }
    default: 
      return state  
  }
}

export default todoApp