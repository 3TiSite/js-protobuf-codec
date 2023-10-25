export default (msg, f, repeated_set)=>{
  for (let [n,o] of Reader(msg)) {
    o = f[--n](o)
    if(repeated_set.includes(n)) {
      if(!li[n]){
        li[n] = []
      }
      li[n].push(o);
    } else {
      li[n] = o
    }
  }
}
