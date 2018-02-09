var webdriverio = require('webdriverio');
var iosOptions = require('../../helpers/caps').iosOptions;
var app = require('../../helpers/apps').iosTestApp;
var assert = require('chai').assert;

iosOptions.desiredCapabilities.browserName = 'Safari';

describe('Create Safari session', function () {
  it('should create and destroy IOS Safari session', async function () {
    var client = webdriverio.remote(iosOptions);
    return client.init()
      .getUrl('https://www.google.com')
      .title(function (result) {
        assert.equal(result.value, 'Google');
      })
      .end();
  });
});