let gulp = require("gulp");
let debug = require("gulp-strip-debug");
let logging = require("gulp-remove-logging");
let uglify = require("gulp-uglify");
let babel = require("gulp-babel");
let htmlmin = require("gulp-htmlmin");
let cssmin = require("gulp-clean-css");
let jsonmin = require("gulp-jsonminify2");
let imagemin = require("gulp-imagemin");

// 文件夹路径
let base=''

let js = [base+'/*.js', base+'/**/*.js']
let html = [base+'/**/*.wxml']
let css = [base+'/*.wxss', base+'/**/*.wxss']
let json = [base+'/*.json', base+'/**/*.json']
let image = [base+'/**/*.png', base+'/**/*.jpg', base+'/**/*.jpeg']

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