onDeviceReady = ->
  angular.bootstrap document, [ 'app' ]
document.addEventListener 'deviceready', onDeviceReady, false
if typeof cordova == 'undefined'
  $html = angular.element(document.getElementsByTagName('html')[0])
  angular.element().ready ->
    try
      angular.bootstrap document, [ 'app' ]
    catch e
      console.error e.stack or e.message or e
    return