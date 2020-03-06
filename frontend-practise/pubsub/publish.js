const pubsub = require('./pubsub');
require('./subscribe');

pubsub.publish('printVal', 'Dude');
pubsub.publish('printVal', 'Wassup');