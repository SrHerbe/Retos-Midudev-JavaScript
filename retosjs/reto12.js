function selectSleigh(distance, sleighs) {
  
  let mejor = null;
  
  sleighs.forEach((v, i) => {
      sleighs[i].consumption = v.consumption*distance;
  });
  
  sleighs.reverse().every((v) => {
      if (v.consumption > 20) {
          return true;
      } else {
          mejor = v.name;
      }
  });
  
  return mejor;
}
