// Generated by CoffeeScript 1.3.3
/*global module, require
*/

module.exports = function(grunt) {
  var fs;
  fs = require('fs');
  return grunt.registerMultiTask('rename', 'Renames files', function() {
    var dest, src;
    src = this.file.src;
    dest = this.file.dest;
    return fs.renameSync(src, dest);
  });
};