define (require, module, exports) ->
	ng = require('angular');
	app = require('./app');

	ng.bootstrap(document, ['app']);
