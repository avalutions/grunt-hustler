// Generated by CoffeeScript 1.3.3
/*global module, require
*/

module.exports = function(grunt) {
  var deleteDirectory, deleteFile, deleteFileObject, fs, rimraf;
  fs = require('fs');
  rimraf = require('rimraf');
  deleteFileObject = function(command, fileObject) {
    command(fileObject);
    return grunt.log.ok(fileObject);
  };
  deleteFile = function(file) {
    return deleteFileObject(fs.unlinkSync, file);
  };
  deleteDirectory = function(directory) {
    return deleteFileObject(rimraf.sync, directory);
  };
  return grunt.registerMultiTask('delete', 'Deletes files and directories', function() {
    return grunt.helper('hustler processSources', this.file.src, this.file.dest, this.data, deleteFile, deleteDirectory);
  });
};
