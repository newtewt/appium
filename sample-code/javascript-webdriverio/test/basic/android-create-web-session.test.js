var webdriverio = require('webdriverio');
var androidOptions = require('../../helpers/caps').androidOptions;
var app = require('../../helpers/apps').androidApiDemos;
var assert = require('chai').assert;

androidOptions.desiredCapabilities.browserName = 'Chrome';

describe('Create Chrome web session', function () {
  var client;

  before(function () {
    client = webdriverio.remote(androidOptions);
    return client.init();
  });

  after(function () {
    return client.end();
  });

  it('should create and destroy Android browser session', async function () {

    // Navigate to google.com
    return client.get('https://www.google.com')
      .title(function (res) {
        assert.equal(res.value, 'Google')
      })
      .source(function (res) {
        assert.match(/<html/g);
      });
  });
});