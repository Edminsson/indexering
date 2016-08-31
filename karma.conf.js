// Karma configuration
// Generated on Mon Jan 25 2016 14:17:18 GMT+0100 (W. Europe Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'lib/jquery/jquery.js',
      'lib/underscore/underscore.js',
      'lib/angular/angular.js',
      'lib/angular-mocks/angular-mocks.js',
      'lib/angular-route/angular-route.js',
      'lib/ng-alertify/ng-alertify.js',
      'lib/angular-loading-bar/loading-bar.js',
      'lib/angular-animate/angular-animate.js',
      'lib/angular-scroll-glue/scrollglue.js',
      'app/app.js',
      'app/**/*.js',
      'app/**/*.html',
      'app-tests/BaseMvcAppDummy.js',
      'app-tests/mocks.js',
      'app-tests/testRunner.js',
      'app-tests/anmarkningArbetsorderDirectiveTest.js',
      'app-tests/startControllerTest.js',
      'app-tests/numreringskontrollServiceTest.js',
      'app-tests/numreringServiceTest.js',
      'app-tests/arbetsorderControllerTest.js',
      'app-tests/numreringControllerTest.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'app/anmarkningArbetsorder/anmarkningArbetsorder.html': ['ng-html2js']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
