
/**
 * @param {any} data
 * @return {string}
 */
function stringify(data) {
    // your code here
  let type = Object.prototype.toString.call(data);
    if(type == '[object Object]') {
      let result = [];
      for(let key in data) {
        result.push(`"${key}":${stringify(data[key])}`);
      }
      return `{${result.join(',')}}`;
    } else if(type == '[object String]') {
      return `"${data}"`;
    } else if(type == '[object Number]' || type == '[object Boolean]') {
      return `${data}`;
    } else if(type == '[object Array]') {
      let result = [];
      data.forEach((elem) => {
        result.push(stringify(elem));
      })
      return `[${result}]`;
    }
  }

  let data = [1, 'string', {a: 3}] ;
  console.log(stringify(data));
  console.log(JSON.stringify(data));

