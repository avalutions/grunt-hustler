/*global module*/

module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: '<json:package.json>',

		nodeunit: {
			tasks: [
				'./test/**/!(deleteSpec.js)*.js',
				'./test/**/deleteSpec.js'
			]
		},

		delete: {
			temp: {
				src: './temp/'
			}
		},

		coffee: {
			src: {
				src: './src/*.coffee',
				dest: './src/',
				bare: true
			},
			test: {
				src: './test/*.coffee',
				dest: './test/',
				bare: true
			}
		},

		watch: {
			src: {
				files: './src/**/*.coffee',
				tasks: 'coffee test'
			},
			test: {
				files: './test/**/*.coffee',
				tasks: 'coffee test'
			}
		}
	});

	grunt.loadTasks('./tasks/');
	grunt.renameTask('test', 'nodeunit');
	grunt.registerTask('test', 'delete nodeunit delete');
	grunt.registerTask('default', 'test');
};