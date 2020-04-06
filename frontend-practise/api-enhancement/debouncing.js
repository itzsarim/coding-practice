let data = 0;
let apicall = () => {
    console.log('data returned', data);
    data++;
    let text = document.querySelector('#debounce').value;

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

let debounce = (func, delay) => {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    }
}

let debouncedapicall = debounce(apicall, 300);