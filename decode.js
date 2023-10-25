import Reader from './reader.js'

export default (func_li, repeated_id_li)=>(msg)=>{
  var li = [],n,data;
  for ([n,{data}] of Reader(msg)) {
    o = func_li[--n]({data})
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
