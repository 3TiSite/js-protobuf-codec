import Reader from './decode/reader.js'

export default (func_li, default_li)=>(msg)=>{
  var n,data,o,t,li=structuredClone(default_li);

  for ([n,{data}] of Reader(msg)) {
    o = func_li[--n](data);
    t = li[n];

    if(Array.isArray(t)) {
      t.push(o)
    } else {
      li[n] = o
    }
  }

  return li
}
