/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
    // your code here   
    if(!tree) return 0;
    
    let queue = [tree];
    let height = 0;
    while(queue.length!=0) {
      height++;
      let candidates = [...queue];
      queue = [];
      candidates.forEach((candidate) => {
        queue.push(...candidate.children);
      });
      candidates = [];
    }
     return height; 
  }