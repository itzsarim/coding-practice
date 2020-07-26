function balancedParentheses(str) {
    // let stack = [];
    // let map = {
    //     '(': ')',
    //     '[': ']',
    //     '{': '}'
    // }

    // for (let i = 0; i < str.length; i++) {
    //     // If character is an opening brace add it to a stack
    //     if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
    //         stack.push(str[i]);
    //     }
    //     //if closing brace, pop from stack
    //     else {
    //         let lastEle = stack.pop();
    //         //Return false if the element popped doesn’t match the corresponding closing brace in the map 
    //         if (str[i] !== map[lastEle]) {return false};
    //     }
    // }
    // //if stack not empty at end, return false
    // if (stack.length !== 0) {return false};

    // return true;

  var stack = [];
  var top;
  function findClosing(opening) {
    if(opening === '(') {
      return ')';
    } else if(opening === '[') {
      return ']';
    } else if(opening === '{') {
      return '}';
    }
  }
  stack.push(str[0]);
  for(var i=1;i<str.length;i++) {
    if(stack.length!=0) {
      top = stack.pop();
      if(findClosing(top) !== str[i]) {
        stack.push(str[i]);
      } else {
        stack.pop();
      }
    } else {
        stack.push(str[i]);
    }
  }
  if(stack.length === 0) {
    return true;
  }
  return false;
}
console.log(balancedParentheses("{[]()}" ));
console.log(balancedParentheses("{[(])}"));
console.log(balancedParentheses("{}[]{}"));
console.log(balancedParentheses("[]}"));