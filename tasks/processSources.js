// Generated by CoffeeScript 1.3.3
/*global module, require
*/

module.exports = function(grunt) {
  var fs, _;
  fs = require('fs');
  _ = grunt.utils._;
  return grunt.registerHelper('processSources', function(src, dest, config, fileCb, directoryCb) {
    var isArray, sources;
    isArray = _.isArray(src);
    sources = isArray ? src : [src];
    return sources.forEach(function(source) {
      var directories, files, sourceExists;
      sourceExists = fs.existsSync(source);
      if (!sourceExists) {
        return grunt.log.error(source);
      }
      directories = grunt.file.expandDirs(source);
      files = grunt.file.expandFiles(source);
      directories.forEach(function(directory) {
        return directoryCb(directory, source, config, dest);
      });
      return files.forEach(function(file) {
        return fileCb(file, source, config, dest);
      });
    });
  });
};