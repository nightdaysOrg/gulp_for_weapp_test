let gulp = require("gulp");
let debug = require("gulp-strip-debug");
let logging = require("gulp-remove-logging");
let uglify = require("gulp-uglify");
let babel = require("gulp-babel");
let htmlmin = require("gulp-htmlmin");
let cssmin = require("gulp-clean-css");
let jsonmin = require("gulp-jsonminify2");
let imagemin = require("gulp-imagemin");

let js = ['gongfuyuan/*.js', 'gongfuyuan/**/*.js']
let html = ['gongfuyuan/**/*.wxml']
let css = ['gongfuyuan/*.wxss', 'gongfuyuan/**/*.wxss']
let json = ['gongfuyuan/*.json', 'gongfuyuan/**/*.json']
let image = ['gongfuyuan/**/*.png', 'gongfuyuan/**/*.jpg', 'gongfuyuan/**/*.jpeg']

//执行所有
gulp.task("default", ['js', 'css', 'html', 'json', 'image'], function () {

})
gulp.task("js", function () {
    return gulp.src(js)
        .pipe(babel())
        .pipe(uglify())
        .pipe(debug())
        .pipe(gulp.dest("dist"))
})

gulp.task("html", function () {
    return gulp.src(html)
        // .pipe(htmlmin())
        .pipe(gulp.dest("dist"));
})

gulp.task("css", function () {
    return gulp.src(css)
        .pipe(cssmin())
        .pipe(gulp.dest("dist"));
})

gulp.task('json', function () {
    return gulp.src(json)
        .pipe(jsonmin())
        .pipe(gulp.dest("dist"));
})

gulp.task("image", function () {
    return gulp.src(image)
        .pipe(imagemin())
        .pipe(gulp.dest("dist"));
})

gulp.task("watch", function () {
    gulp.watch(js, ["js"])
    gulp.watch(html, ["html"])
    gulp.watch(css, ["css"])
    gulp.watch(json, ["json"])
    gulp.watch(image, ["image"])
})