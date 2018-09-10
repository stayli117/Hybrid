const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify'); //js压缩
const concat = require('gulp-concat'); //文件合并
const rename = require('gulp-rename'); //文件更名
const notify = require('gulp-notify'); //提示信息
const cssmin = require('gulp-minify-css'); //压缩css
const replace = require('gulp-replace');

const ngAnnotate = require('gulp-ng-annotate');
const ngmin = require('gulp-ngmin');

gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: 'localhost:' + require('./config/config').SERVER_PORT
    });
});

gulp.task('run', ['browser-sync'], function () {
    gulp.watch([
        'public/css/*',
        'public/js/*',
    ],['cbjs','cbcss','reload']);

    gulp.watch([
        "views/**/*",
        "public/images/**/*",
        "public/views/**/*",
        "public/*"
    ], ['reload']);

});

gulp.task('reload', function () {
    // browserSync.reload();
});

gulp.task('cbjs', function () {
    gulp.src([
        "public/bower_components/angular/angular.min.js",
        "public/bower_components/angular-route/angular-route.min.js",
        "public/libs/hybrid.js",
        "public/js/*.js"
    ])


        .pipe(ngAnnotate())
        .pipe(ngmin({
            dynamic: false
        }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./public/dist/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify({
            ie8: true,
            // preserveComments: 'some' //保留所有注释
        }))
        .pipe(gulp.dest('./public/dist/js'));

});

gulp.task('cbcss', function () {
    gulp.src([
        "public/bower_components/normalize.css/normalize.css",
        "public/bower_components/bootstrap/dist/css/bootstrap.min.css",
        "public/css/*"
    ])
        .pipe(concat("bundle.css"))
        .pipe(gulp.dest('public/dist/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cssmin())
        .pipe(gulp.dest("public/dist/css"));
});

gulp.task('makeHybridJS', function () {
    gulp.src([
        "./public/webapp/blade/libs/zepto.js",
        "./public/webapp/blade/libs/fastclick.js",
        "./public/webapp/blade/libs/underscore.js",
        "./public/webapp/blade/libs/underscore.extend.js",
    ])

        .pipe(concat('./public/libs/dist/hybrid.min.js'))
        .pipe(gulp.dest('./public/libs/dist'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify({
            ie8: true,
            // preserveComments: 'some' //保留所有注释
        }))
        .pipe(gulp.dest('./public/libs/dist')); 
});