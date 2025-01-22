const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const paths = {
    scss: {
        src: './src/scss/**/*.scss', // Source SCSS files
        dest: './src/css/' // Destination for compiled CSS
    }
};

// Compile SCSS to CSS
function compileSass() {
    return gulp.src(paths.scss.src)
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError)) // Compile Sass
        .pipe(gulp.dest(paths.scss.dest)); // Output CSS
}

// Watch for changes
function watchFiles() {
    gulp.watch(paths.scss.src, compileSass); // Watch SCSS files
}

// Define tasks
exports.compileSass = compileSass;
exports.watch = gulp.series(compileSass, watchFiles);
