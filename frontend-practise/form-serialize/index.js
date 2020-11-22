(function() {
	let submit = document.querySelector("#submit");
	submit.addEventListener('click', (e) => {
        e.preventDefault();
        let form = document.querySelector('#form-control');
        let elements = form.elements;
		let mainElementsMap = [];
		for(let i=0; i<elements.length; i++) {
			if(elements[i].nodeName == "INPUT" && (["text", "email"].includes(elements[i].type) || (elements[i].type == "radio" && elements[i].checked))){
				mainElementsMap.push([elements[i].name, elements[i].value]);
            }
            if(elements[i].type == "select-one") {
                for(let j=0; j<elements[i].options.length; j++) {
                    if(elements[i].options[j].selected) {
                        mainElementsMap.push([elements[i].name, elements[i].options[j].value]);
                    }
                }
            }
		}
		let result = serialize(mainElementsMap);
		document.querySelector('#result').innerText = result;
	})
	
	let serialize = function(map) {
		let result = "";
		for(let i=0; i< map.length; i++) {
			result = result + `${encodeURIComponent(map[i][0])}=${encodeURIComponent(map[i][1])}&`
		}
		return result.substring(0,result.length-1);
	}
	
})()