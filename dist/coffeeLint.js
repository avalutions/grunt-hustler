/*global module, require
*/

module.exports = function(grunt) {
  var coffeeLint;
  coffeeLint = require('coffeelint');
  return grunt.registerMultiTask('coffeeLint', 'Lints CoffeeScript files', function() {
    var config, files, src;
    src = this.file.src;
    config = this.data;
    files = grunt.file.expandFiles(src);
    return files.forEach(function(file, index) {
      var errors, source;
      source = grunt.file.read(file);
      errors = coffeeLint.lint(source, config);
      if (!errors.length) {
        grunt.log.ok(file);
        return;
      }
      grunt.log.header(file);
      return errors.forEach(function(error) {
        return grunt.log.error("#" + error.lineNumber + ": " + error.message + " (" + error.context + ")");
      });
    });
  });
};
