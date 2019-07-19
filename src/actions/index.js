/**
 * 要使用Action需要使用store提供的dispatch方法将Action发送出去 
 * action其实是一个JSON对象
 * 但是一般都会使用action Creator这个函数 返回一个action
 */

import { ADD_TODO, TOGGLE_TODO, SET_TODO_TEXT, SET_FILTER } from "./actionTypes";
/**
 * 新增代办事项
 * @param {*} text 
 */

export const addTodo = (text)=>({
  type:ADD_TODO,
  text
})

/**
 * 更改代办事项的状态
 * @param {*} id 
 */
export const toggleTodo = (id)=>({
  type:TOGGLE_TODO,
  id
})

/**
 * 设置todo列表的过滤状态
 * @param {*} filter 
 */
export const setFilter =(filter)=>({
  type:SET_FILTER,
  filter
})
/**
 * 设置待办事项的文本
 * @param {*} text 
 */
export const setTodoText =(text)=>({
  type:SET_TODO_TEXT,
  text
})