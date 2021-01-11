(function() {
/**
 * @param {HTMLElement} 
 * @return {object} object literal presentation
 */
function virtualize(element) {
    // your code here
     let props = {};
     let result = {'type': element.nodeName.toLowerCase(), props};
      if(element.attributes && element.attributes.length) {
        for(let attribute of element.attributes){
          let name = attribute.name === 'class' ? 'className' : attribute.name;
          props[name] = attribute.value;
        }
      }
      let children = Array.from(element.childNodes).map((child) => child.nodeType === Node.TEXT_NODE ? child.textContent: virtualize(child));
      props['children'] = children.length === 1 ? children[0] : children;
      return result;
  }
  
  
  /**
   * @param {object} valid object literal presentation
   * @return {HTMLElement} 
   */
  function render(obj) {
    // your code here
    if(typeof obj === 'string') {
      return document.createTextNode(obj);
    }
  
    const element = document.createElement(obj['type']);
    let propKeys = Object.keys(obj['props']);
    for(let key of propKeys) {
      if(key !== 'children') {
        if(key === 'className') {
          element.setAttribute('class', obj['props'][key]);
        } else {
          element.setAttribute(key,  obj['props'][key]);
        }
      } else {
        if(Array.isArray(obj.props['children'])) {
          obj.props['children'].forEach((child) => {
            element.appendChild(render(child));
          })
        } else {
          element.appendChild(render(obj.props['children']));
        }
      }
    }
  return element;
  }

  let obj = virtualize(document.getElementById('start'));
  console.log(obj);
})();