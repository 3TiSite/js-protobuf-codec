export default (msg, f, repeated_id_li)=>{
  for (let [n,o] of Reader(msg)) {
    o = f[--n](o)
    if(repeated_id_li.includes(n)) {
      if(!li[n]){
        li[n] = []
      }
      li[n].push(o);
    } else {
      li[n] = o
    }
  }
}
