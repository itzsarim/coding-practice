const pubsub = require('./pubsub');

pubsub.subscribe("printVal", (data) => {
    console.log(`i am supposed to print the data ${data}`);
})