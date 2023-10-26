import Reader from './decode/reader.js'

export default (func_li, default_li)=>{
  var array_pos=new Set();
  default_li.forEach(
    (v,p)=>{
      if(Array.isArray(v)){
        array_pos.add(p);
      }
    }
  );
  return (msg)=>{
    var o,n,data,t,li=[];

    for ([n,{data}] of Reader(msg)) {
      o = func_li[--n](data);
      t = li[n];

      if(array_pos.has(n)) {
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
    
    default_li.forEach((v,p)=>{
      if(!(p in li)){
        if(array_pos.has(p)){
          v = [];
        }
        li[p] = v;
      }
    });

    return li
  }
}
