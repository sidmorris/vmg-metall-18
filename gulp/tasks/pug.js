'use strict';
var fs = require('fs');

module.exports = function() {
  $.gulp.task('pug', function() {
    return $.gulp.src('./source/template/pages/*.pug')
      .pipe($.gp.pug({
         pretty: true,
         locals: JSON.parse(fs.readFileSync('./source/template/data.json', 'utf8')) 
        }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
