/*global module, require
*/

module.exports = function(grunt) {
  var crypto;
  crypto = require('crypto');
  return grunt.registerMultiTask('hash', 'Hash a file', function() {
    var dest, hash, source, src;
    src = this.file.src;
    dest = this.file.dest;
    source = grunt.file.read(src);
    hash = crypto.createHash('sha1').update(source).digest('hex');
    return grunt.file.write(dest, hash);
  });
};
