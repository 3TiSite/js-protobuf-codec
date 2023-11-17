import Reader from './reader.js'

export default (func, default_val)=>(msg)=>{
  if(msg.length){
    for (var i of Reader(msg)) {
      return func(i[1].data)
    }
    return default_val
  }
}

