
/**
 * @param {string} str
 * @return {string[]}
 */
function extract(str) {
    // your code here
    let i=0, start=0, end=0, result=[];
    while(i < str.length) {
      start = str.indexOf('<a', i);
      if(start === -1) {
        return result;
      }
      if(str[start+2] !== ' ' && str[start+2] !== '>') {
        i = start + 2;
        continue;
      }
      end = str.indexOf('a>', start+2);
      if(end === -1) {
        return result;
      }
      let anchor = str.substring(start, end+2);
      result.push(anchor);
      i=end+2;
    }
    return result;
  }

  console.log(extract(`
  <div><a>link1< / a><a href="https://bfe.dev">link1< / a><div<abbr>bfe</abbr>div><div><abbr>bfe</abbr><a href="https://bfe.dev" class="link2"><abbr>bfe</abbr><span class="l">l</span><span  class="i">i</span>nk2</a></div></div>`));