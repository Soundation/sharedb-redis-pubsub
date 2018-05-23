var RedisPubSub = require('../index');

require('@teamwork/sharedb/test/pubsub')(function(callback) {
  callback(null, RedisPubSub());
});
