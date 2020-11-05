//https://bigfrontend.dev/problem/create-lazyman
//LazyMan('Jack', console.log).eat('banana').sleepFirst(10).eat('apple').sleep(1)
// (after 10 seconds)
// Wake up after 10 seconds.
// Hi, I'm Jack.
// Eat banana
// Eat apple
// (after 1 second)
// Wake up after 1 second.

function LazyMan1(name, logFn) {
    let funcMap = new Map();
    let man = {
        intro: (name) => {
            let sentence = `Hi, I'm ${name}`;
            // add this to event queue by making it async, so that later we can preempt it in sleepFirst case
            let timer = setTimeout(function(){
                logFn(sentence);
            }, 0);
            // maintain a map so that we can access the timers to cancel;
            funcMap.set(`intro-${name}`, timer);
            // to make the function methods chainable, you need to return the object itself from each objects functions
            return man;
        },
        eat: (food) => {
            let sentence = `Eat ${food}.`;
            let timer = setTimeout(function() {
                logFn(sentence);
            }, 0);
            // key of the map should also have the param with which the function was called;
            funcMap.set(`eat-${food}`, timer);
            return man;
        },
        sleep: (delay) => {
            let sentence = `Wake me after ${delay} second${delay > 1 ? 's':''}`;
            let timer = setTimeout(function() {
                logFn(sentence);
            }, delay*1000);
            funcMap.set(`sleep-${delay}`, timer);
            return man;
        },
        sleepFirst: (delay) => {
            let sentence = `Wake me after ${delay} second${delay > 1 ? 's':''}`;
            for(const [key, value] of funcMap) {
                clearTimeout(value);
            };
            setTimeout(function(){
                logFn(sentence);
                for(const [key, value] of funcMap) {
                    let [func, param] = key.split('-');
                    man[func](param);
                };
            }, delay);
            //man.sleep(delay);
            return man;
        }
    }
    man.intro(name);
    return man;
}


function LazyMan(name, logFn) {
    const ids = new Map();
    let delay = 0;
    const man = {
      intro: (param) => {
        ids.set(`intro-${param}`, setTimeout(() => {
          logFn(`Hi, I'm ${param}.`);
        }, delay));
        return man;
      },
      eat: (param) => {
        ids.set(`eat-${param}`, setTimeout(() => logFn(`Eat ${param}.`), delay));
        return man;
      },
      sleep: (param) => {
        delay += param * 1000;
        ids.set(`sleep-${param}`, setTimeout(() => logFn(`Wake up after ${param} second${param > 1 ? 's': ''}.`), delay));
        return man;
      },
      sleepFirst: (param) => {
        man.sleep(param);
        for (const [name, timeout] of ids) {
          clearTimeout(timeout); 
          const [n, p] = name.split('-');
          man[n](p);
        }
        return man;
      }
    }
    man.intro(name);
    return man;  
  }

LazyMan('Jack', console.log).eat('banana').sleep(1).sleepFirst(10).eat('chiku').sleep(1);