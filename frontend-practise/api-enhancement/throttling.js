let data1 = 0;
let apicall1 = () => {
    console.log('data returned', data);
    data++;
    let text = document.querySelector('#throttle').value;

    fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/spelling/AutoComplete?text=${text}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
		"x-rapidapi-key": "61596c3634mshd1b9210aa234ee2p13040fjsnc695e5bb8566"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
}

let throttle = (func, delay) => {
    let done = false;
    return function() {
        if (!done) {
            done = true;
            setTimeout(function() {
                func();
                done = false;
            }, delay);
        }
    }
}

let throttledapicall = throttle(apicall1, 300);