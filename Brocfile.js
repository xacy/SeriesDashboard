/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();
app.import("bower_components/ember-localstorage-adapter/localstorage_adapter.js");
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
  destDir: 'fonts'
});

/*app.import('vendor/flat-ui/js/flat-ui-pro.min.js');
app.import('vendor/flat-ui/js/vendor/html5shiv.js');
app.import('vendor/flat-ui/js/vendor/respond.min.js');
app.import('vendor/flat-ui/js/vendor/video.js');*/
//app.import('vendor/flat-ui/css/vendor/bootstrap.min.css');
//app.import('vendor/flat-ui/css/flat-ui-pro.min.css');
/*
app.import('vendor/flat-ui/fonts/glyphicons/flat-ui-pro-icons-regular.eot');
app.import('vendor/flat-ui/fonts/glyphicons/flat-ui-pro-icons-regular.svg');
app.import('vendor/flat-ui/fonts/glyphicons/flat-ui-pro-icons-regular.ttf');
app.import('vendor/flat-ui/fonts/glyphicons/flat-ui-pro-icons-regular.woff');
app.import('vendor/flat-ui/fonts/lato/lato-black.eot');
app.import('vendor/flat-ui/fonts/lato/lato-black.svg');
app.import('vendor/flat-ui/fonts/lato/lato-black.ttf');
app.import('vendor/flat-ui/fonts/lato/lato-black.woff');
app.import('vendor/flat-ui/fonts/lato/lato-bold.eot');
app.import('vendor/flat-ui/fonts/lato/lato-bold.svg');
app.import('vendor/flat-ui/fonts/lato/lato-bold.ttf');
app.import('vendor/flat-ui/fonts/lato/lato-bold.woff');*/
// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
