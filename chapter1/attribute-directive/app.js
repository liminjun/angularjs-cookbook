// application module definition
angular.module('myApp', [])
.directive('attributeDirective', function($log) {
  // return the directive definition object
  return {
    // only match this directive to element tags
    restrict: 'A',
    // insert the template matching 'my-template.html'
    template: '<p>An attribute directive</p>',
    link:function(scope,el,attrs){
        $log.log(el.html());

        $log.log(attrs.attributeDirective);//aval

        $log.log(attrs.someAttr);//myvalue

    }
  };
});