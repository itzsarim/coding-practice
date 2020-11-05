function angle(time) {
    // your code here
    let [hr, min] = [time.split(':')[0], time.split(':')[1]];
    if(hr >= 12) {
      hr = hr-12;
    }
    let degreeHr = Math.floor(hr*30 + min/2);
    let degreeMin = min*6;
    let angle = Math.abs(degreeHr - degreeMin)
    
    return angle >180 ? angle - 180: angle;
  }

  console.log(angle('23:30'));