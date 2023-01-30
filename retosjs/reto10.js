function checkJump(heights) {
  return heights.reduce((a,e,i,arr) =>{
    const dif = e-arr[i-1],      
          direction = +(dif>0);          
    if ( i>0 && dif!==0 && a.at(-1)!=direction ) a.push(direction);
    return a;
    },[]).join("") === "10";
}
