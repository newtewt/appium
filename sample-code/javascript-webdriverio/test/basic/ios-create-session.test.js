var webdriverio = require('webdriverio');
var iosOptions = require('../../helpers/caps').iosOptions;
var app = require('../../helpers/apps').iosTestApp;
var assert = require('chai').assert;

iosOptions.desiredCapabilities.app = app;

describe('Create session', function () {
  var client;

  beforeEach(function () {
    client = webdriverio.remote(iosOptions);
  });

  afterEach(function () {
    return client.end();
  });

  it('should create and destroy IOS sessions', function () {
    return client
      .sessions(function (result) {
        assert.equal(result.value.length, 0);
      })
      .sessions(function (result) {
        assert.equal(result.value.length, 1);
      })
      .init()
      .getAttribute('XCUIElementTypeApplication', 'name', function (result) {
        assert.equal(result.value, 'TestApp');
      })
      .end()
      .sessions(function (result) {
        assert.equal(result.value.length, 0);
      });
  });
});