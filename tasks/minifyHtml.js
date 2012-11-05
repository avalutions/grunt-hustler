// Generated by CoffeeScript 1.3.3
/*global module, require
*/

module.exports = function(grunt) {
  var prettyDiff;
  prettyDiff = require('prettydiff');
  grunt.registerHelper('hustler minifyHtml', function(config) {
    var compiled, conditional, contents, data, dest, groups, normalized, options, separator, sourceContents, src, _ref, _results;
    normalized = grunt.helper('hustler normalizeFiles', config);
    groups = normalized.groups;
    data = config.data;
    conditional = (_ref = data.conditional) != null ? _ref : true;
    _results = [];
    for (dest in groups) {
      src = groups[dest];
      sourceContents = [];
      src.forEach(function(source) {
        var contents;
        contents = grunt.file.read(source);
        return sourceContents.push(contents);
      });
      separator = grunt.utils.linefeed;
      contents = sourceContents.join(grunt.utils.normalizelf(separator));
      options = {
        source: contents,
        mode: 'minify',
        conditional: conditional
      };
      compiled = prettyDiff.api(options)[0];
      grunt.file.write(dest, compiled);
      _results.push(grunt.verbose.ok("" + src + " -> " + dest));
    }
    return _results;
  });
  return grunt.registerMultiTask('minifyHtml', 'Minifies Html', function() {
    return grunt.helper('hustler minifyHtml', this);
  });
};
