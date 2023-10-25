import Reader from './reader.js'

export default (msg, li, func_li, repeated_id_li)=>{
  for (let [n,o] of Reader(msg)) {
    o = func_li[--n](o)
    if(repeated_id_li.includes(n)) {
      if(li[n]){
        li[n].push(o);
      }else{
        li[n] = [o];
      }
    } else {
      li[n] = o
    }
  }
  return li
}
