const subscription = {};

module.exports = {
    subscribe: function(event, callback) {
        if(!subscription[event]) {
            subscription[event] = [callback];
        } else {
            subscription[event].push(callback);
        }
    },

    publish: function(event, data) {
        if(subscription[event]) {
            subscription[event].forEach(callback => {
                callback(data);
            });
        }
    }
}