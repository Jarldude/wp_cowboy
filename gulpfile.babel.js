import gulp from 'gulp';
import yargs from 'yargs';
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import del from 'del';
import gulpWebpack from 'webpack-stream';
import uglify from 'gulp-uglify';
import vinylNamed from 'vinyl-named';
import browserSync from 'browser-sync';
import imagemin from 'gulp-imagemin';


const server = browserSync.create();
const sass = gulpSass(dartSass);
const PRODUCTION = yargs.argv.prod;

const paths = {
    styles: {
        src:['src/assets/scss/bundle.scss', 'src/assets/scss/admin.scss'],
        dest:'dist/assets/css'
    },
    images:{
        src:'src/assets/images/**/*.{jpg,jpeg,png,svg,gif}',
        dest:'dist/assets/images'
    },
    scripts:{
        src:['src/assets/js/bundle.js', 'src/assets/js/admin.js'],
        dest:'dist/assets/js'
    },
    other:{
        src:['src/assets/**/*', '!src/assets/{images, js, scss}', '!src/assets/{images, js, scss}/**/*'],
        dest:'dist/assets'
    }
}

export const serve = (done)=>{
    server.init({
        proxy:"http://127.0.0.1/wordpress/"
    });
    done();
}

export const reload = (done) => {
    server.reload();
    done();
}

export const cowboy = (done) => {
    console.log('Cowboy yeehaa!!!');
    console.log(PRODUCTION);
    done();
}
  
export const styles = () => {
    return gulp.src(paths.styles.src)

    .pipe(gulpif(!PRODUCTION,sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, cleanCSS({compatibility: 'ie8'})))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(paths.styles.dest));
}

export const images = () => {
    return gulp.src(paths.images.src)
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(gulp.dest(paths.images.dest))
}

export const copy = () => {
    return gulp.src(paths.other.src)
    .pipe(gulp.dest(paths.other.dest));
}

export const clean = () => {
    return del(['dist']);
}

export const scripts = () =>{
    return gulp.src(paths.scripts.src)
    .pipe(vinylNamed())
    .pipe(gulpWebpack({
        module:{
            loaders:[
                {
                    test:/\.js$/,
                    use:{
                        loader:'babel-loader',
                        options:{
                            presets:['babel-preset-es2015']
                        }
                    }
                }
            ]
        },
        output:{
            filename:'[name].js'
        },
        externals:{
            jquery: 'jQuery'
        },
        devtool: !PRODUCTION ? 'inline-source-map' : false
    }))
    .pipe(gulpif(PRODUCTION, uglify()))
    .pipe(gulp.dest(paths.scripts.dest));
}

export const watch = () => {
    gulp.watch('src/assets/scss/**/*.scss',gulp.series(styles, reload));
    gulp.watch('src/assets/js/**/*.js',gulp.series(scripts, reload));
    gulp.watch('**/*.php', reload);
    gulp.watch(paths.images.src, gulp.series(images, reload));
    gulp.watch(paths.other.src, gulp.series(copy, reload));
}

export const dev = gulp.series(clean, gulp.parallel(styles, scripts, images, copy), serve, watch);
export const build = gulp.series(clean, gulp.parallel(styles, scripts, images, copy));
export default dev;


