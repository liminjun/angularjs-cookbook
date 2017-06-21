// application module definition
angular.module('myApp', [])
  .directive('classDirective', function ($log) {
    // return the directive definition object
    return {
      // only match this directive to element tags
      restrict: 'C',
      // insert the template matching 'my-template.html'
      template: '<p>An class directive</p>',
      link: function (scope, el, attrs) {

        $log.log(el.html());
        debugger;
        $log.log(el.hasClass('normal-class'));//true

        $log.log(attrs.classDirective);//cval

        $log.log(attrs.someAttr);//myvalue

      }
    };
  });