// Generated by CoffeeScript 1.3.3
/*global module, require
*/

/*global module, require
*/

module.exports = function(grunt) {
  var os, path, _;
  os = require('os');
  path = require('path');
  _ = grunt.utils._;
  return grunt.registerMultiTask('server', 'Run a server', function() {
    var args, child, cmd, config, done, isWindows, port, src, target, watch;
    done = this.async();
    src = this.file.src;
    target = this.target;
    config = this.data;
    watch = config.watch;
    port = config.port;
    isWindows = !!process.platform.match(/^win/);
    cmd = isWindows ? 'cmd' : 'node';
    args = [];
    if (isWindows) {
      args.push('/c');
    }
    args.push(watch ? path.normalize('./node_modules/.bin/nodemon') : 'node');
    args.push(path.normalize(src));
    if (watch) {
      args.push('-w');
    }
    if (watch) {
      args.push(path.normalize(watch));
    }
    args.push(port);
    child = grunt.utils.spawn({
      cmd: cmd,
      args: args
    }, function(err) {
      if (err) {
        grunt.log.error(err);
      }
      return done(true);
    });
    child.stdout.on('data', function(buffer) {
      return grunt.log.writeln(_.rtrim(buffer));
    });
    return child.stderr.on('data', function(buffer) {
      return grunt.log.writeln(_.rtrim(buffer));
    });
  });
};
