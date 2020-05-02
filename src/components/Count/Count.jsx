import React, { Component } from 'react'

export default class Count extends Component {
  //加
  increment = ()=>{
    //获取用户的输入
    const {value} = this.refs.user_selected
    //2."通知"redux 加 value
    this.props.increment(value*1)
  }
  //减
  decrement = ()=>{
    //获取用户的输入
    const {value} = this.refs.user_selected
    //2."通知"redux 减 value
    this.props.decrement(value*1)
  }
  //当前的和是奇数再加
  incrementIfOdd = ()=>{
    //获取用户的输入
    const {value} = this.refs.user_selected
    //获取原来的和
    let {count} = this.props //这里取出来的对象,需要解构赋值
    //判断
    if(count%2 === 1){
      //2."通知"redux 加 value
      this.props.increment(value*1)
    }
  }

  //等500毫秒再加
  incrementAsync = ()=>{
    //获取用户的输入
    const {value} = this.refs.user_selected
    setTimeout(() => {
      //2."通知"redux 加 value
      this.props.increment(value*1)
    }, 500);
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
				<select ref="user_selected">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
				<button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}
