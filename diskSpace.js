function segment(x, space) {
    let segments = [];

    for(let i = 0; i < space.length; i++) {
        if (i+x <= space.length) {
            segments.push(space.slice(i, i+x));
        } else {
            break;
        }
    }

    let minimums = segments.map(segment => Math.min(...segment));

    return Math.max(...minimums);
}

console.log(segment(1,[1000]));