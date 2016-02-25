angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate','ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})
.controller('BuildCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("build");
  $scope.menutitle = NavigationService.makeactive("Build");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})
.controller('CareersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("careers");
  $scope.menutitle = NavigationService.makeactive("Careers");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})
.controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("contact");
  $scope.menutitle = NavigationService.makeactive("Contact");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})
.controller('MediaCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("media");
  $scope.menutitle = NavigationService.makeactive("Media");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.news = [{
  img: "img/news/n1.jpg",
  name:"Bombay Times",
  date:"24 Jan 2015"

},{
  img: "img/news/n2.jpg",
  name:"Hindustan Times",
  date:"12 Feb 2015"

},{
  img: "img/news/n3.jpg",
  name:"Mumbai Mirror",
  date:"15 Mar 2015"

},{
  img: "img/news/n4.jpg",
  name:"Times Of India",
  date:"27 Aug 2015"

}];

})
.controller('ClientCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("client");
  $scope.menutitle = NavigationService.makeactive("Client");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.client = [{
  img: "img/client/c1.jpg"

},{
img: "img/client/c2.png"

},{
img: "img/client/c3.png"

},{
img: "img/client/c4.png"

},{
img: "img/client/c5.png"

},{
img: "img/client/c6.png"

},{
img: "img/client/c7.png"

},{
img: "img/client/c8.png"

},{
img: "img/client/c9.png"

},{
img: "img/client/c10.png"

}];

})
.controller('ProjectCtrl', function($scope, TemplateService, NavigationService, $timeout,$stateParams) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("project");
  $scope.menutitle = NavigationService.makeactive("Project");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  // $scope.oneAtATime = true;
  $scope.accordian = [];
$scope.accordian.push({
    isFirstOpen: true,
    isFirstDisabled: false
});
$scope.accordian.push({
    isFirstOpen: true,
    isFirstDisabled: false
});
$scope.accordian.push({
    isFirstOpen: true,
    isFirstDisabled: false
});

  $scope.mySlides = [
  'img/slider/s1.jpg',
  'img/slider/s1.jpg',
  'img/slider/s1.jpg',
  'img/slider/s1.jpg'
];

$scope.Project = [
'img/project/a1.jpg',
'img/project/a2.jpg',
'img/project/a1.jpg',
'img/project/a2.jpg',
'img/project/a1.jpg',
'img/project/a2.jpg'
];
})
.controller('KnowCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("know");
  $scope.menutitle = NavigationService.makeactive("Know");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.management = [{
  img: "img/ceo.png",
  name: "Lorem Ipsum",
  desg: "CEO",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets."
},{
img: "img/coo.png",
name: "Lorem Ipsum",
desg: "COO",
desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets."
},{
img: "img/ceo2.png",
name: "Lorem Ipsum",
desg: "CEO",
desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets."
}];

})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})

;
