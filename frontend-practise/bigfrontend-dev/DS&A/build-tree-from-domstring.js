let input = ['<div>', 'a', '<div>', 'b', '</div>','c', '</div>'];
// output expected
// root = 
// {
//     'value' : 'div',
//     'children' : [{..}]
// }

function createTree(tokens) {
    if(!Array.isArray(tokens) || tokens.length == 0) {
        return;
    }
    let stack = [];
    tokens.forEach((token) => {
        if(token === '</div>') {
            // remove items till u find the corresponding opening tag and keep making children array
            let children = [];
            while(stack[stack.length - 1] !== '<div>') {
                children.unshift(stack.pop());
            }
            stack.pop();
            stack.push({'value': 'div', children});
        } else {
            stack.push(token);
        }
    })
    return stack.pop();
}

console.log(createTree(input));