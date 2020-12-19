var childBar = document.querySelector('.child');
var percentage = 10;
childBar.style.width = '100%';
childBar.style.transition = '2s width'
window.setInterval(function() {
    if(percentage <=100) {
        childBar.style.width = percentage + '%';
        percentage++;
    }
},100)