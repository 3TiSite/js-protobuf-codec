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

export const nodefault = (func_li, array_pos)=>(msg)=>{
  var o,n,data,t,li=[];

  for ([n,{data}] of Reader(msg)) {
    o = func_li[--n](data);
    t = li[n];

    if(array_pos.includes(n)) {
      data = li[n];
      if(data){
        data.push(o)
      }else{
        li[n] = [o]
      }
    } else {
      li[n] = o
    }
  } 
  return li
}
