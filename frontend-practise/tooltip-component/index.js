(function() {
    function createToolTip() {
        let tip = document.createElement('div');
        tip.className = 'tooltip-content';
        let content = document.createElement('span');
        content.innerText = 'hello';
        tip.appendChild(content)
        let tooltip = document.getElementsByClassName('tooltip');
        
        if(tooltip) {
            for(let elem of tooltip) {
                elem.appendChild(tip);
            }
        }
    }

    createToolTip()
})()