grunt = require 'grunt'
rimraf = require 'rimraf'
fs = require 'fs'
createFile = grunt.file.write
deleteDirectory = rimraf.sync

temp = './temp/'
from = "#{temp}from/"
to = "#{temp}to/"

exports['directory to directory'] =
	setUp: (callback) ->
		deleteDirectory temp
		createFile "#{from}a.js", ''
		createFile "#{from}b.js", ''
		grunt.helper 'hustler copy', from, to
		callback()
	tearDown: (callback) ->
		deleteDirectory temp
		callback()
	main: (test) ->
		test.expect 2
		test.equal true, fs.existsSync "#{to}a.js", 'should find a.js'
		test.equal true, fs.existsSync "#{to}b.js", 'should find b.js'
		test.done()

exports['array of directories to directory'] =
	setUp: (callback) ->
		deleteDirectory temp
		createFile "#{from}a/a.js", ''
		createFile "#{from}b/b.js", ''
		createFile "#{from}c/d/d.js", ''

		src = ["#{from}a/", "#{from}b/", "#{from}c/"]

		grunt.helper 'hustler copy', src, to
		callback()
	tearDown: (callback) ->
		deleteDirectory temp
		callback()
	main: (test) ->
		test.expect 3
		test.equal true, fs.existsSync "#{to}a.js", 'should find a.js'
		test.equal true, fs.existsSync "#{to}b.js", 'should find b.js'
		test.equal true, fs.existsSync "#{to}d/d.js", 'should find d.js inside d directory'
		test.done()

exports['file to directory'] =
	setUp: (callback) ->
		deleteDirectory temp
		createFile "#{from}a.js", ''

		src = "#{from}a.js"

		grunt.helper 'hustler copy', src, to

		callback()
	tearDown: (callback) ->
		deleteDirectory temp
		callback()
	main: (test) ->
		test.expect 1
		test.equal true, fs.existsSync "#{to}a.js", 'should find a.js'
		test.done()

exports['array of files to directory'] =
	setUp: (callback) ->
		deleteDirectory temp
		createFile "#{from}a.js", ''
		createFile "#{from}b.js", ''

		src = ["#{from}a.js", "#{from}b.js"]

		grunt.helper 'hustler copy', src, to

		callback()
	tearDown: (callback) ->
		deleteDirectory temp
		callback()
	main: (test) ->
		test.expect 2
		test.equal true, fs.existsSync "#{to}a.js", 'should find a.js'
		test.equal true, fs.existsSync "#{to}b.js", 'should find b.js'
		test.done()

exports['file match to directory'] =
	setUp: (callback) ->
		deleteDirectory temp
		createFile "#{from}a.js", ''
		createFile "#{from}b.js", ''
		createFile "#{from}c.html", ''

		src = "#{from}**/*.js"

		grunt.helper 'hustler copy', src, to

		callback()
	tearDown: (callback) ->
		deleteDirectory temp
		callback()
	main: (test) ->
		test.expect 3
		test.equal true, fs.existsSync "#{to}a.js", 'should find a.js'
		test.equal true, fs.existsSync "#{to}b.js", 'should find b.js'
		test.notEqual true, fs.existsSync "#{to}c.html", 'should not find c.html'
		test.done()

exports['array of file matches to directory'] =
	setUp: (callback) ->
		deleteDirectory temp
		createFile "#{from}a.js", ''
		createFile "#{from}b.js", ''
		createFile "#{from}c.html", ''
		createFile "#{from}d.html", ''
		createFile "#{from}e.txt", ''

		src = ["#{from}**/*.js", "#{from}**/*.html"]

		grunt.helper 'hustler copy', src, to

		callback()
	tearDown: (callback) ->
		deleteDirectory temp
		callback()
	main: (test) ->
		test.expect 5
		test.equal true, fs.existsSync "#{to}a.js", 'should find a.js'
		test.equal true, fs.existsSync "#{to}b.js", 'should find b.js'
		test.equal true, fs.existsSync "#{to}c.html", 'should find c.html'
		test.equal true, fs.existsSync "#{to}d.html", 'should find d.html'
		test.notEqual true, fs.existsSync "#{to}e.txt", 'should not find e.txt'
		test.done()


exports['array of files, file matches, and directories to directory'] =
	setUp: (callback) ->
		deleteDirectory temp
		createFile "#{from}a.js", ''
		createFile "#{from}b.js", ''
		createFile "#{from}c/c.js", ''
		createFile "#{from}d/d.js", ''
		createFile "#{from}e/f/f.js", ''
		createFile "#{from}g.html", ''
		createFile "#{from}h.html", ''
		createFile "#{from}i.txt", ''

		src = ["#{from}a.js", "#{from}b.js", "#{from}c/", "#{from}d/", "#{from}e/", "#{from}**/*.html"]

		grunt.helper 'hustler copy', src, to

		callback()
	tearDown: (callback) ->
		deleteDirectory temp
		callback()
	main: (test) ->
		test.expect 8
		test.equal true, fs.existsSync "#{to}a.js", 'should find a.js'
		test.equal true, fs.existsSync "#{to}b.js", 'should find b.js'
		test.equal true, fs.existsSync "#{to}c.js", 'should find c.js'
		test.equal true, fs.existsSync "#{to}d.js", 'should find d.js'
		test.equal true, fs.existsSync "#{to}f/f.js", 'should find f/f.js'
		test.equal true, fs.existsSync "#{to}g.html", 'should find g.html'
		test.equal true, fs.existsSync "#{to}h.html", 'should find h.html'
		test.notEqual true, fs.existsSync "#{to}i.txt", 'should not find i.txt'
		test.done()

exports['file to file'] =
	setUp: (callback) ->
		deleteDirectory temp
		createFile "#{from}a.js", ''

		src = "#{from}a.js"
		dest = "#{to}b.html"

		grunt.helper 'hustler copy', src, dest

		callback()
	tearDown: (callback) ->
		deleteDirectory temp
		callback()
	main: (test) ->
		test.expect 2
		test.equal true, fs.existsSync "#{to}b.html", 'should find b.html'
		test.notEqual true, fs.existsSync "#{to}a.js", 'should not find a.js'
		test.done()