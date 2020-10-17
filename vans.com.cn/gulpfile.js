const gulp = require('gulp')
const rename = require('gulp-rename')
const htmlmin = require('gulp-htmlmin')
const sass = require('gulp-sass')
const minifycss = require("gulp-minify-css")
sass.compiler = require('node-sass')
const connect = require("gulp-connect")

gulp.task('copyHtml',function(){
    return gulp.src('./*.html')
    .pipe(htmlmin({
        removeEmptyAttibutes: true,
        collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
})

gulp.task('copyIndexCss',function(){
    return gulp.src('./css/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(minifycss())
    .pipe(rename('index.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
})

gulp.task('copyCartCss',function(){
    return gulp.src('./css/cart.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(minifycss())
    .pipe(rename('cart.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
})

gulp.task('copyDetailsCss',function(){
    return gulp.src('./css/details.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(minifycss())
    .pipe(rename('details.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
})

gulp.task('copyLoginCss',function(){
    return gulp.src('./css/login.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(minifycss())
    .pipe(rename('login.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
})

gulp.task('copyListCss',function(){
    return gulp.src('./css/list.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(minifycss())
    .pipe(rename('list.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
})

gulp.task('copyCommonCss',function(){
    return gulp.src('./css/common.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(minifycss())
    .pipe(rename('common.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
})

gulp.task('copyRegisterCss',function(){
    return gulp.src('./css/register.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(minifycss())
    .pipe(rename('register.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
})

gulp.task('copyImg',function(){
    return gulp.src('./imgs/*.{jpg,png,ico}')
    .pipe(gulp.dest('dist/imgs'))
    .pipe(connect.reload());
})

gulp.task("copyJs",function(){
    return gulp.src('./js/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
})

gulp.task('copyJson',function(){
    return gulp.src(['./*.json','!package.json'])
    .pipe(gulp.dest('dist/data'))
    .pipe(connect.reload());
})

gulp.task('build',gulp.parallel('copyHtml','copyIndexCss','copyImg','copyJs','copyJson','copyCommonCss','copyDetailsCss','copyLoginCss','copyListCss','copyCartCss','copyRegisterCss'))

gulp.task('watch',function(){
    gulp.watch('./*.html',gulp.parallel('copyHtml'));
    gulp.watch('./css/index.scss',gulp.parallel('copyIndexCss'));
    gulp.watch('./css/common.scss',gulp.parallel('copyCommonCss'));
    gulp.watch('./css/cart.scss',gulp.parallel('copyCartCss'));
    gulp.watch('./css/login.scss',gulp.parallel('copyLoginCss'));
    gulp.watch('./css/register.scss',gulp.parallel('copyRegisterCss'));
    gulp.watch('./imgs/*.{jpg,png,ico}',gulp.parallel('copyImg'));
    gulp.watch('./js/*.js',gulp.parallel('copyJs'));
    gulp.watch(['./*.json','!package,json'],gulp.parallel('copyJson'));
    gulp.watch('./css/list.scss',gulp.parallel('copyListCss'));
    gulp.watch('./css/details.scss',gulp.parallel('copyDetailsCss'));
})

gulp.task('server',function(){
    connect.server({
        root:'dist',
        port:2000,
        livereload:true
    })
})

gulp.task('default',gulp.parallel('watch','server'));