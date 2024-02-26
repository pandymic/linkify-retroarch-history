const gulp = require( 'gulp' ),
  log = require( 'fancy-log' ),
  plumber = require('gulp-plumber'),
  shell = require( 'child_process' ).exec;

gulp.task( 'dist', () => {
  return gulp.src( [
    './src/**/*'
  ] )
    .pipe( gulp.dest( './dist' ) );
} );

gulp.task( 'permissions', ( callback ) => {
  shell( 'cd ./dist/bin && find . -user $USER -type f -exec chmod u+x,g+x {} \\;', ( err, stdout, stderr ) => {
    log.info( 'Binary file executable bit updated...' );
    if ( stdout.length ) log( stdout.trim() );
    if ( stderr.length ) log.error( stderr.trim() );
    callback( err );
  } );
} );

gulp.task( 'watch', () => {
  gulp.watch( './src/**/*', gulp.series( 'default' ) );
} );

gulp.task( 'default', gulp.series( 'dist', 'permissions' ) );