import React from 'react'

// 引入样式文件
import './Tab.less'

export default class Tab extends React.Component{
  constructor () {
    super()
    this.state = {
      // 激活的下标
      activeIndex: 1
    }
  }
  changeIndex (index) {
    this.setState({
      activeIndex: index
    })
  }
  render () {

    /*let arr = []
    for (var i=0; i<this.props.tab.length; i++) { 
      let tabObj = this.props.tab[i]
      let btnObj = <button key={tabObj.id}>{tabObj.btn}</button>
      arr.push(btnObj)
    }
    console.log(arr)*/
    let activeIndex = this.state.activeIndex
    return (
        <div className="tab">
          {this.props.tab.map((item, index)=>{
            return <button key={item.id} className={activeIndex===index?'active':''} onClick={this.changeIndex.bind(this, index)}>{item.btn}</button>
          })}
          {this.props.tab.map((item, index) => {
            return <div key={item.id} className={activeIndex===index?'active':''}>{item.content}</div>
          })}
        </div>
      )
  }
}