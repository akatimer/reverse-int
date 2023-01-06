module.exports = function reverse (n) {
  let new_n=0;
  let s =0;
  n=Math.abs(n)
  if (Math.floor(n/10) > 0 ) {
      s = s+1
      if (Math.floor(n/100) > 0) {
        s= s+1
        if (Math.floor(n/1000) > 0) {
          s=s+1
          if (Math.floor(n/10000) > 0){
            s=s+1
            if (Math.floor(n/100000) >0) {
              s=s+1
            }
          }
        }
      }
  }
 console.log(s)
 let i=0;
 for ( s  ; s>-1 ; s-1) {
  new_n = new_n + (10**i)*Math.floor(n/10**s)
  console.log ((10**i)*Math.floor(n/10**s))
  n=Math.floor(n%10**s)
  s=s-1;
  i=i+1;
 } 
 return new_n
}