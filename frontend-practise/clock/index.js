(function(){
    function getTime(hand) {
        if(hand === 'seconds') {
            return 1000;
        } else if (hand === 'minute') {
            return 60000;
        } else if (hand === 'hour') {
            return 3600000;
        }
    }

    function rotate(hand) {
        let time = getTime(hand);
        let count = 0;
        let elem = document.getElementById(hand);
        setInterval(() => {
            if(count!=60) {
                count++;
            } else {
                count = 0;
            }
            elem.style.transform = `rotate(${6*count}deg)`; 
        }, time)
    }
    rotate('seconds');
    rotate('minute');
    rotate('hour');
})()