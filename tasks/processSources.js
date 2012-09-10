// Generated by CoffeeScript 1.3.3
/*global module, require
*/

module.exports = function(grunt) {
  var fs, path, _;
  fs = require('fs');
  path = require('path');
  _ = grunt.utils._;
  return grunt.registerHelper('hustler processSources', function(src, dest, config, fileCb, directoryCb) {
    var isArray, sources;
    isArray = _.isArray(src);
    sources = isArray ? src : [src];
    return sources.forEach(function(source) {
      var directories, ext, files, isFile, sourceExists;
      ext = path.extname(source);
      sourceExists = fs.existsSync(source);
      isFile = ext.length > 0;
      if (!(sourceExists || isFile)) {
        return grunt.log.error(source);
      }
      directories = grunt.file.expandDirs(source);
      files = grunt.file.expandFiles(source);
      files.forEach(function(file) {
        return fileCb(file, source, config, dest);
      });
      return directories.forEach(function(directory) {
        return directoryCb(directory, source, config, dest);
      });
    });
  });
};
