// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  // for http request with session
  $httpProvider.defaults.withCredentials = true;

  $stateProvider

    .state('home', {
      url: "/home",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl'
    })
    //  .state('footer', {
    //   url: "/",
    //   templateUrl: "views/template.html",
    //   controller: 'FooterCtrl'
    // })
    .state('know', {
      url: "/know",
      templateUrl: "views/template.html",
      controller: 'KnowCtrl'
    })
    .state('careers', {
      url: "/careers",
      templateUrl: "views/template.html",
      controller: 'CareersCtrl'
    })
    .state('client', {
      url: "/client",
      templateUrl: "views/template.html",
      controller: 'ClientCtrl'
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "views/template.html",
      controller: 'ContactCtrl'
    })
    // .state('media', {
    //   url: "/media",
    //   templateUrl: "views/template.html",
    //   controller: 'MediaCtrl'
    // })
    .state('project', {
      url: "/project/:id",
      templateUrl: "views/template.html",
      controller: 'ProjectCtrl'
    })
    .state('build', {
      url: "/build",
      templateUrl: "views/template.html",
      controller: 'BuildCtrl'
    })
    .state('give', {
      url: "/give",
      templateUrl: "views/template.html",
      controller: 'GiveCtrl'
    }).state('shantilal', {
      url: "/give/shantilal",
      templateUrl: "views/template.html",
      controller: 'ShantilalCtrl'
    })
    .state('bjs', {
      url: "/give/bjs",
      templateUrl: "views/template.html",
      controller: 'BjsCtrl'
    });
  $urlRouterProvider.otherwise("/home");

});

firstapp.directive('autoHeight', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      var windowHeight = $(window).height();
      var addHeight = function() {
        $element.css("min-height", windowHeight);
      };
      addHeight();
    }
  };
});

firstapp.directive('giveHeight', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      var windowHeight = $('#getHeight').height();
      var addHeight = function() {
        $element.css("min-height", windowHeight+66);
      };
      addHeight();
    }
  };
});
firstapp.directive('autoHeightfixed', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height();
            var addHeight = function() {
                $element.css("height", windowHeight);
            };
            addHeight();
        }
    };
});
firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('uploadImage', function($http) {
    return {
        templateUrl: 'views/directive/uploadFile.html',
        scope: {
            model: '=ngModel',
            callback: "=ngCallback"
        },
        link: function($scope, element, attrs) {
            $scope.isMultiple = false;
            $scope.inObject = false;
            if (attrs.multiple || attrs.multiple === "") {
                $scope.isMultiple = true;
                $("#inputImage").attr("multiple", "ADD");
            }
            if (attrs.noView || attrs.noView === "") {
                $scope.noShow = true;
            }
            if (attrs.inobj || attrs.inobj === "") {
                $scope.inObject = true;
            }
            $scope.clearOld = function() {
                $scope.model = [];
            };
            $scope.upload = function(image) {
                console.log(image);
                console.log("File");
                var Template = this;
                image.hide = true;
                var formData = new FormData();
                formData.append('file', image.file, image.name);
                $http.post(uploadurl, formData, {
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: angular.identity
                }).success(function(data) {
                    if ($scope.callback) {
                        $scope.callback(data);
                    } else {
                        if ($scope.isMultiple) {
                            if ($scope.inObject) {
                                $scope.model.push({
                                    "image": data.data[0]
                                });
                            } else {
                                $scope.model.push(data.data[0]);
                            }
                        } else {
                            $scope.model = data.data[0];
                        }
                    }
                });
            };
        }
    };
});
