var config = require('./gulpfile.config')();
var del = require('del');
var gulp = require('gulp');
var install = require('gulp-install');
var shell = require('gulp-shell')
var plumber = require('gulp-plumber');
var gulpbower = require('gulp-bower');
var tslint = require('gulp-tslint')
var gulpprint = require('gulp-print');

gulp.task('tslint', function() {
    return gulp
    .src(['app/**/*.ts', '!app/**/*.d.ts'])
    .pipe(gulpprint())
    .pipe(tslint({
        formatter: 'verbose'
    }))
    .pipe(tslint.report({
        emitError: false
    }));
});

gulp.task('clean', function() {
    return del(['./lib', './app/**/*.js', './app/**/*.js.map']);
});

gulp.task('bowerupdate', function() {
    return gulpbower();
});

// gulp.task('bowerupdate', 
//      shell.task(['bower update'])
// );

//Används bara om vi har dragit hem en version utan build-mapp och måste bygga den
gulp.task('builddep', ['bowerupdate'], function () {
    return gulp.src(['./bower_components/openseadragon/package.json'])
        .pipe(install());
});

gulp.task('copy', ['clean', 'bowerupdate'], function () {
    gulp.src(['./bower_components/jquery/dist/*.*'])
        .pipe(gulp.dest('./lib/jquery'));

    gulp.src(['./bower_components/angular*/angular*.{js,map}'])
        .pipe(gulp.dest('./lib/'));

    gulp.src(['./bower_components/angular-scroll-glue/src/*.{js,map}'])
        .pipe(gulp.dest('./lib/angular-scroll-glue/'));

    gulp.src(['./bower_components/angular-loading-bar/src/*.*'])
        .pipe(gulp.dest('./lib/angular-loading-bar/'));

    gulp.src(['./bower_components/ng-alertify/dist/**/*.*'])
        .pipe(gulp.dest('./lib/ng-alertify'));

    gulp.src(['./bower_components/bootstrap/dist/**/*.*'])
        .pipe(gulp.dest('./lib/bootstrap'));

    gulp.src(['./bower_components/openseadragon/built-openseadragon/**/*.*'])
        .pipe(gulp.dest('./lib/'));

    gulp.src(['./bower_components/underscore/**/*.*'])
        .pipe(gulp.dest('./lib/underscore'));
});

gulp.task('default', ['clean', 'bowerupdate', 'copy']);
