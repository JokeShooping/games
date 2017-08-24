import React from 'react'

// 原始数据
let todo = {
    user:'蕙雨馨宸',
    items:[{action:"买牙膏",done:false,id:1},
      {action:"给梁惠欣发邮件",done:false,id:2},
      {action:"给林婷玉打电话",done:true,id:3},
      {action:"还我信用卡",done:false,id:4},
      {action:"去逛街吧",done:false,id:5},
      {action:"阅览室走起",done:false,id:6},
      {action:"去买菜，去吗？",done:false,id:7},
      {action:"今天打算干嘛去",done:false,id:8}
      ]
  }

// 引入todolist
import TodoList from 'components/TodoList/TodoList'
// 编写一个App类（组件）继承自React.Component类
export default class App extends React.Component{
  render () {
    
    return (
      <div>
        <TodoList user={todo.user} items={todo.items} />
      </div>
      )
  }
}