var RedisPubSub = require('../index');

require('@soundation/sharedb/test/pubsub')(function(callback) {
  callback(null, RedisPubSub());
});
