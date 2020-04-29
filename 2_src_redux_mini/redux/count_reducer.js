//该函数是为count组件服务的reducer，是真正操作状态的“人”
//action是动作对象，形如：{type:'??',data:'???'}

let initState = 0 //定义初始化状态
export default function (preSate=initState, action) {
  const {type, data} = action
  let newState
  switch (type) {
    case 'increment':
      //如果action动作类型是加
      console.log('加', preSate, action);
      newState = preSate + data
      return newState
    case 'decrement':
      //如果action动作类型是减
      console.log('减', preSate, action);
      newState = preSate - data
      return newState
    default:
      //如果动作类型不是加也不是减，那么就是初始化的时。
      console.log('减', preSate, action);
      return preSate;
  }


}