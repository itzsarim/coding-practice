function shuffle(arr) {
    // modify the arr inline to change the order randomly
    for(var i=arr.length-1; i>0; i--) {
      var random_number = Math.floor((Math.random() * (i+1)));
      var temp = arr[random_number];
      arr[random_number] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
  var arr = [1,2,3,4,5,6];
  var copy = [...arr]
  console.log('input array', arr, 'shuffled array', shuffle(copy));