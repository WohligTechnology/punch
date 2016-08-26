angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider','ui.select'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.mySlides = [
        'img/home/1.jpg',
        'img/home/2.jpg',
        'img/home/3.jpg',
        'img/home/4.jpg'
    ];


  })
  .controller('BuildCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("build");
    $scope.menutitle = NavigationService.makeactive("Build");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

  })
  .controller('GiveCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("give");
    $scope.menutitle = NavigationService.makeactive("Give");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

  })
  .controller('ShantilalCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("shantilal");
    $scope.menutitle = NavigationService.makeactive("Give");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

  })
  .controller('BjsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("bjs");
    $scope.menutitle = NavigationService.makeactive("Give");
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
      name: "Bombay Times",
      date: "24 Jan 2015"

    }, {
      img: "img/news/n2.jpg",
      name: "Hindustan Times",
      date: "12 Feb 2015"

    }, {
      img: "img/news/n3.jpg",
      name: "Mumbai Mirror",
      date: "15 Mar 2015"

    }, {
      img: "img/news/n4.jpg",
      name: "Times Of India",
      date: "27 Aug 2015"

    }];

  })
  .controller('ClientCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("client");
    $scope.menutitle = NavigationService.makeactive("Client");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.client = [{
      img: "img/client/c1.png"

    }, {
      img: "img/client/c2.png"

    }, {
      img: "img/client/c3.png"

    }, {
      img: "img/client/c4.png"

    }, {
      img: "img/client/c5.png"

    }, {
      img: "img/client/c6.png"

    }, {
      img: "img/client/c7.png"

    }];

  })
  .controller('ProjectCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("project");
    $scope.menutitle = NavigationService.makeactive("Project");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.projectimages = {};
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

    $scope.projectimages.Project1 = [
      'img/a1.jpg',
      'img/a2.jpg',
      'img/a3.jpg',
      'img/a4.jpg',
      'img/a5.jpg',
      'img/a6.jpg'
    ];
    $scope.projectimages.Project2 = [
      'img/project/b1.jpg',
      'img/project/b2.jpg',
      'img/project/b3.jpg',
      'img/project/b4.jpg',
      'img/project/b5.jpg',
      'img/project/b6.jpg'
    ];
    $scope.projectimages.Project3 = [
      'img/project/01.jpg',
      'img/project/02.jpg',
      'img/project/03.jpg',
      'img/project/04.jpg',
      'img/project/05.jpg',
      'img/project/mc1.jpg'
    ];
    $scope.projectimages.Project4 = [
      'img/project/d1.jpg',
      'img/project/d2.jpg',
      'img/project/d3.jpg',
      'img/project/d4.jpg',
      'img/project/d5.jpg',
      'img/project/d6.jpg'
    ];
    $scope.projectimages.Project5 = [
      'img/project/c1.jpg',
      'img/project/c2.jpg',
      'img/project/c3.jpg',
      'img/project/c4.jpg',
      'img/project/c5.jpg',
      'img/project/c6.jpg'
    ];
    $scope.projectall = [{
      id: 1,
      img: "img/slider/sc0.jpg",
      image: "img/background/mc1.jpg",
      name: "MUTTHA CHAMBERS I"
    }, {
      id: 2,
      img: "img/slider/sc1.jpg",
      image: "img/background/mc2.jpg",
      name: "MUTTHA CHAMBERS II"
    }, {
      id: 3,
      img: "img/slider/sc2.jpg",
      image: "img/background/mc1.jpg",
      name: "YOO GOA"
    }, {
      id: 4,
      img: "img/slider/sc3.jpg",
      image: "img/background/mt.jpg",
      name: "MUTTHA TOWERS"
    }, {
      id: 5,
      img: "img/slider/sc4.jpg",
      image: "img/background/ms.jpg",
      name: "MUTTHA SYMPHONY"
    }];

    _.each($scope.projectall, function(n) {
      if (n.id == $stateParams.id) {
        $scope.projectDetail = n;
        $scope.Project = $scope.projectimages['Project' + $scope.projectDetail.id];
      }
    });

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
    }, {
      img: "img/ceo2.png",
      name: "Lorem Ipsum",
      desg: "CEO",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets."
    }];

  })

.controller('headerctrl', function($scope, TemplateService , $timeout) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
  
  $scope.countries = [ // Taken from https://gist.github.com/unceus/6501985
      {
          name: 'Kabhi Khushi Kabhi Gum',
          code: 'kkk'
      }, {
          name: 'Bahubali',
          code: 'BH'
      }, {
          name: 'Varun Dhawan',
          code: 'AA'
      }, {
          name: 'Deepika',
          code: 'D'
      }, {
          name: 'Ranbir Kapoor',
          code: 'RK'
      }
  ];
})

;
