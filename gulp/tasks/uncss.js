'use strict';

module.exports = function () {
  $.gulp.task('uncss', function () {
    return $.gulp.src($.config.root + '/assets/css/app.css')
      .pipe($.gp.uncss({
        html: [$.config.root + '/**/*.html'],
        ignore:[]
      }))
      .pipe($.gp.rename({ suffix: '.min', prefix: 'clean-' }))
      // .pipe($.gp.cleanCss({ level: { 1: { specialComments: 0 } } }))
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  })
};
