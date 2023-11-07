import Reader from './decode/reader.js'

export default (func_li, default_li)=>{
  var array_pos=[];
  default_li.forEach(
    (v,p)=>{
      if(Array.isArray(v)){
        array_pos.push(p);
      }
    }
  );
  var func = nodefault(func_li, array_pos);
  return (msg)=>{
    if(msg.length){
      var li = func(msg); 
      default_li.forEach((v,p)=>{
        if(!(p in li)){
          if(array_pos.includes(p)){
            v = [];
          }
          li[p] = v;
        }
      });
      return li
    }
  }
}

export const li = (func)=>(msg)=>{
  if(msg.length){
    var r = []
    for (var i of Reader(msg)) {
      r.push(func(i[0].data))
    }
    return r
  }
}

export const one = (func, default_val)=>(msg)=>{
  if(msg.length){
    for (var i of Reader(msg)) {
      return func(i[1].data)
    }
    return default_val
  }
}

export const nodefault = (func_li, array_pos)=>(msg)=>{
  if(msg.length){
    var o,n,data,li=[];
    for(n of array_pos){
      li[n]=[];
    }
    for ([n,{data}] of Reader(msg)) {
      o = func_li[--n](data);

      if(array_pos.includes(n)) {
        li[n].push(o)
      } else {
        li[n] = o
      }
    } 
    return li
  }
}
