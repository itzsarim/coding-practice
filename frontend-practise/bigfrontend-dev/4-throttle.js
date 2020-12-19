let currentTime = 0

const run = (input) => {
  currentTime = 0
  const calls = []

  const func = (arg) => {
     calls.push(`${arg}@${currentTime}`)
  }

  /**
 * @param {Function} func
 * @param {number} wait
 */
function throttle(func, wait) {
    let waiting = false;
    let lastArgs;
    return function () {
       if (!waiting) {
         waiting = true;
         func.apply(this, arguments);
         setTimeout(() => {
           waiting = false;
           if (lastArgs) func.apply(this, lastArgs);
         }, wait);
       } else {
         lastArgs = [...arguments];
       }
    }
  }

  const throttled = throttle(func, 3)
  input.forEach((call) => {
     const [arg, time] = call.split('@')
     setTimeout(() => throttled(arg), time)
  })
  return calls
}

console.log(run);