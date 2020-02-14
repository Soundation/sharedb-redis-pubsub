var RedisPubSub = require('../index');

require('@soundation/sharedb/test/pubsub')(function(callback) {
  const rps = RedisPubSub()
  rps.client.del('idseq:id');
  callback(null, rps);
});
