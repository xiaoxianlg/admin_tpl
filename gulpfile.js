/**
 * Created by ligang on 2017/07/13.
 * 本gulp的目的，就是将gulp与npm script结合起来
 */

var gulp = require("gulp");
var gutil = require('gulp-util');
var exec = require('child_process').exec;

// hello world
gulp.task('hello-world', function() {
    gutil.log("hello-world");
});

// run dev 本地开发
gulp.task('run-dev', function () {
    gutil.log("run-dev");
    exec('npm run dev', function (err) {
        if (err) return cb(err);
        cb();
    });
});
// build:sit-preview 测试环境
gulp.task('run-build:sit', function () {
    gutil.log("npm run build:sit-preview");
    exec('npm run build:sit-preview', function (err) {
        if (err) return cb(err);
        cb();
    });
});
// run build:prod
gulp.task('run-build:prod', function () {
    gutil.log("npm run build:prod");
    exec('npm run build:prod', function (err) {
        if (err) return cb(err);
        cb();
    });
});