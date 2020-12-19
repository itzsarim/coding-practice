let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };

  let f = [{
    name: 'Peter',
    salary: 2000
  }, {
    name: 'Alex',
    salary: 1800
  }]
  
function sumSalary(obj) {
// base case return the sum when the value is an array
    if(Array.isArray(obj)) {
        return obj.reduce((a,b) => a+b.salary,0 );
    } else {
        let sum = 0;
        for(let subdep of Object.values(obj)) {
            sum += sumSalary(subdep);
        }
        return sum;
    }
}

console.log(sumSalary(company));