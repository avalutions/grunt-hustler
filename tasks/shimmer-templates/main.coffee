define [
	'angular'
	'./app'
], (ng, app) ->

	onDeviceReady = ->
		try
			ng.bootstrap document, [ 'app' ]
		catch e
			console.error e.stack or e.message or e

	if cordova?
		ng.element(document.getElementsByTagName('html')[0]).ready onDeviceReady
	else
		document.addEventListener 'deviceready', onDeviceReady, false