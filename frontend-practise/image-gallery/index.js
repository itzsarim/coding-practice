
   (function() {
    var img = [
        ["images/B1YclC5.jpg", "Birdman or (The Unexpected Virtue of Ignorance) won Best Picture."],
        ["images/XjAdinX.jpg", "Eddie Redmayne won Best Actor in a Leading Role for his role in The Theory of Everything."],
        ["images/kCj3uvC.jpg", "Julianne Moore won Best Actress in a Leading Role for her role in Still Alice."],
        ["images/OJq9hq1.jpg", "J K Simmons won Best Actor in a Supporting Role for his role in Whiplash."],
        ["images/qZ4XnIJ.jpg", "Patricia Arguette won Best Actress in a Supporting Role for her role in Boyhood."],
       ];

      var state = {
          "position": 0
      } 

       function render() {

        const html = `<img id="image-elem" src=${img[state['position']] && img[state['position']][0]} />
        <p id="title">${img[state['position']] && img[state['position']][1]}</p>
        <div class="buttons"><button id="prev">Prev</button><button id="next">Next</button></div>
        `
        document.getElementById('container').innerHTML = html;
       }

       function updateUI() {
           document.getElementById('image-elem').src = img[state['position']] && img[state['position']][0];
           document.getElementById('title').innerText = img[state['position']] && img[state['position']][1];
       }

       function addEventListeners() {
        document.getElementById('prev').addEventListener('click', (e) => {
            if(state["position"] > 0) {
                state["position"] = state["position"] - 1;
            } else {
                state["position"] = img.length - 1
            }
            updateUI();
        });

        document.getElementById('next').addEventListener('click', (e) => {
            debugger;
            if(state["position"] < img.length - 1) {
                state["position"] = state["position"] + 1;
            } else {
                state["position"] = 0;
            }
            updateUI();
        });

       }
       render();
       addEventListeners();
   })()