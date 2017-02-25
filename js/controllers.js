angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider','ui.select'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header.html";
    // TemplateService.header = "";
    $scope.mySlides = [
        'img/home/1.jpg',
        'img/home/2.jpg',
        'img/home/3.jpg',
        'img/home/4.jpg'
    ];

       $scope.mySlidess = [
        'img/mobile/c1.jpg',
        'img/mobile/c2.jpg',
         'img/mobile/towers.jpg',
        'img/mobile/symphony.jpg',
       
    ];
    //     $scope.$on('$viewContentLoaded', function() {

    //     $(window).scroll(function() {
    //         var scroller = $(document).scrollTop();
    //         var height = 0;
    //         if (height <= scroller) {
    //             $('body').addClass('show-header');

    //         } else {
    //             $('body').removeClass('show-header');

    //         }
    //     });
    // });



  })
  .controller('BuildCtrl', function($scope, $state,TemplateService, NavigationService, $timeout,$uibModal ) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("build");
    $scope.menutitle = NavigationService.makeactive("Build");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
     $scope.validEmail = /^[a-z]+[@][a-z]+[.]+[a-z]*$/;

       $scope.contactsubmit = function(formData) {
         console.log("hi contact");
           NavigationService.ContactSave(formData, function (data) {
             console.log("m in give",data);
             if(data){
                $scope.thanks();
                  $timeout(function() {   
                        $state.reload();
                    }, 2000);
             }
           });
 
       };

       $scope.thanks = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/thank.html",
            scope: $scope

        })
    };
    // $scope.formData ={};
    // $scope.contactForm=function(formData){
    //   console.log("formData",formData);
    //   if(formData){
    //     $scope.thanks();
    //      $timeout(function() {
                        
    //                     $state.reload();
    //                 }, 2000);
    //   }

    // }


  })
  .controller('GiveCtrl', function($scope, $state,TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("give");
    $scope.menutitle = NavigationService.makeactive("Give");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
     $scope.validEmail = /^[a-z]+[@][a-z]+[.]+[a-z]*$/;
      $scope.subscribeForm ={};
        $scope.formData = {};
    

       $scope.contactsubmit = function(formData) {
         console.log("hi contact");
           NavigationService.ContactSave(formData, function (data) {
             console.log("m in give",data);
             if(data){
                $scope.thanks();
                  $timeout(function() {   
                        $state.reload();
                    }, 2000);
             }
           });
 
       };

       $scope.thanks = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/thank.html",
            scope: $scope

        })
    };
      // $scope.subscribe=function(formData){
      //   console.log("email",formData);
      //   if(formData){
      //     $scope.show = true;
      //       $scope.thanks();
      //       $timeout(function() {
      //                   $scope.show = false;
      //                   $scope.formData = {};
      //               }, 2000);
      //   }
        
      // } 

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
  .controller('CareersCtrl', function($scope, $state,TemplateService, NavigationService, $timeout, $uibModal ) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("careers");
    $scope.menutitle = NavigationService.makeactive("Careers");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

        $scope.contactsubmit = function(formData) {
         console.log("hi contact");
           NavigationService.ContactSave(formData, function (data) {
             console.log("m in give",data);
             if(data){
                $scope.thanks();
                   $timeout(function() {   
                        $state.reload();
                    }, 2000);
             }
           });
 
       };
     $scope.thanks = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/thank.html",
            scope: $scope

        })
    };
    // $scope.formData ={};
    // $scope.contactForm=function(formData){
    //   console.log("formData",formData);
    //   if(formData){
    //     $scope.thanks();
    //      $timeout(function() {
                        
    //                     $scope.formData = {};
    //                 }, 2000);
    //               }
    //             }

 

  })

  .controller('ContactCtrl', function($scope, $state,TemplateService, NavigationService, $timeout,$uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("contact");
    $scope.menutitle = NavigationService.makeactive("Contact");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.validEmail = /^[a-z]+[@][a-z]+[.]+[a-z]*$/;


      $scope.contactsubmit = function(formData) {
         console.log("hi contact");
           NavigationService.ContactSave(formData, function (data) {
             console.log("m in give",data);
             if(data){
                $scope.thanks();
                   $timeout(function() {   
                        $state.reload();
                    }, 2000);
                    //  $state.reload();
             }
           });
 
       };

      $scope.thanks = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/thank.html",
            scope: $scope

        })
    };
    // $scope.formData ={};
    // $scope.contactForm=function(formData){
    //   console.log("formData",formData);
    //   if(formData){
    //     $scope.thanks();
    //      $timeout(function() {
                        
    //                     $scope.formData = {};
    //                 }, 2000);
    //   }

    // }

 

  

  })
  // .controller('MediaCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //   //Used to name the .html file
  //   $scope.template = TemplateService.changecontent("media");
  //   $scope.menutitle = NavigationService.makeactive("Media");
  //   TemplateService.title = $scope.menutitle;
  //   $scope.navigation = NavigationService.getnav();
  //
  //   $scope.news = [{
  //     img: "img/news/n1.jpg",
  //     name: "Bombay Times",
  //     date: "24 Jan 2015"
  //
  //   }, {
  //     img: "img/news/n2.jpg",
  //     name: "Hindustan Times",
  //     date: "12 Feb 2015"
  //
  //   }, {
  //     img: "img/news/n3.jpg",
  //     name: "Mumbai Mirror",
  //     date: "15 Mar 2015"
  //
  //   }, {
  //     img: "img/news/n4.jpg",
  //     name: "Times Of India",
  //     date: "27 Aug 2015"
  //
  //   }, {
  //     img: "img/news/n2.jpg",
  //     name: "Hindustan Times",
  //     date: "12 Feb 2015"
  //
  //   }, {
  //     img: "img/news/n3.jpg",
  //     name: "Mumbai Mirror",
  //     date: "15 Mar 2015"
  //
  //   },{
  //     img: "img/news/n1.jpg",
  //     name: "Bombay Times",
  //     date: "24 Jan 2015"
  //
  //   }, {
  //     img: "img/news/n4.jpg",
  //     name: "Times Of India",
  //     date: "27 Aug 2015"
  //
  //   }];
  //
  //   var news =_.chunk($scope.news,4);
  //   $scope.news = _.map(news,function (key) {
  //     return _.chunk(key,2);
  //   });
  //
  // })
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
  .controller('ProjectCtrl', function($scope, $state,TemplateService, NavigationService, $timeout, $stateParams,$uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("project");
    $scope.menutitle = NavigationService.makeactive("Project");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.projectimages = {};
    // $scope.oneAtATime = true;
     $scope.validEmail = /^[a-z]+[@][a-z]+[.]+[a-z]*$/;
      $scope.subscribeForm ={};

      // $scope.subscribe=function(email){
      //   console.log("email",email);
      //   if(email){
      //     $scope.show = true;
      //       $scope.thanks();
      //       $timeout(function() {
      //                   $scope.show = false;
      //                   $scope.subscribeForm = {};
      //               }, 2000);
      //   }
        
      // } 

      $scope.contactsubmit = function(formData) {
         console.log("hi contact");
           NavigationService.ContactSave(formData, function (data) {
             console.log("m in give",data);
             if(data){
                $scope.thanks();
                   $timeout(function() {   
                        $state.reload();
                    }, 2000);
                    //  $state.reload();
             }
           });
 
       };

      $scope.thanks = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/thank.html",
            scope: $scope

        })
    };
    $scope.paramId = $stateParams.id ;
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
    //     $scope.projectimages.Project6 = [
    //   'img/project/c1.jpg',
    //   'img/project/c2.jpg',
    //   'img/project/c3.jpg',
    //   'img/project/c4.jpg',
    //   'img/project/c5.jpg',
    //   'img/project/c6.jpg'
    // ];
    $scope.projectall = [{
      id: 1,
      img: "img/slider/sc0.jpg",
      image: "img/background/mc1.jpg",
      mimage:"img/mobile/c1.jpg",
      name: "MUTTHA CHAMBERS I"
    }, {
      id: 2,
      img: "img/slider/sc1.jpg",
      image: "img/background/mc2.jpg",
      mimage:"img/mobile/c2.jpg",
      name: "MUTTHA CHAMBERS II"
    }, {
      id: 3,
      img: "img/slider/sc2.jpg",
      image: "img/background/mc1.jpg",
      mimage:"",
      name: "YOO GOA"
    }, {
      id: 4,
      img: "img/slider/sc3.jpg",
      image: "img/background/mt.jpg",
      mimage:"img/mobile/towers.jpg",
      name: "MUTTHA TOWERS"
    }, {
      id: 5,
      img: "img/slider/sc4.jpg",
      image: "img/background/ms.jpg",
      mimage:"img/mobile/symphony.jpg",
      name: "MUTTHA SYMPHONY"
    },
    //  {
    //   id: 6,
    //   img: "img/slider/sc4.jpg",
    //   image: "img/background/ms.jpg",
    //   name: "MUTTHA BUSINESS CENTER"
    // }
    ];
        $scope.mySlides=[{
  s:"img/buisness/enterance.jpg"
    }];

    _.each($scope.projectall, function(n) {
      if (n.id == $stateParams.id) {
        $scope.projectDetail = n;
        $scope.Project = $scope.projectimages['Project' + $scope.projectDetail.id];
      }
    });

  })

  //   .controller('ProjectsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //   //Used to name the .html file
  //   $scope.template = TemplateService.changecontent("projects");
  //   $scope.menutitle = NavigationService.makeactive("Project");
  //   TemplateService.title = $scope.menutitle;
  //   $scope.navigation = NavigationService.getnav();
  // })

  .controller('KnowCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("know");
    $scope.menutitle = NavigationService.makeactive("Know");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.management = [{
      img: "img/ceo.jpg",
      name: "Sameer Muttha",
      desg: "CEO",
      desc: "Sameer Muttha is the face of a new India; bold, innovative, vibrant, determined and never troubled by ambiguity or uncertainty. He took to his father's ability of a businessman and brought in with him higher goals for the Muttha Group. Today, as the Managing Director of Muttha, Sameer is determined to take forward his father’s vision. He quickly set about redefining its rules. Within a short time, the Muttha Group has become one of India’s most successful commercial real estate companies. "
    }, {
      img: "img/ceo2.jpg",
      name: " Shantilal Muttha",
      desg: "CEO",
      desc: "Shantilal Muttha is a social entrepreneur  committed to his work in the development sector for the last 30 years. Having risen from extremely humble origins, he realized the infinite power of entrepreneurship to sow the seeds for positive change and transformation in society. He founded the Bharatiya Jain Sanghatana (BJS) in 1985 as a non-political, secular, non-profit organization with a vision ‘to collectively contribute towards nation-building through a holistic development of the society'."
    }];

  })

    .controller('footerctrl', function($scope,$state, TemplateService, NavigationService,$timeout) {
        $scope.template = TemplateService;

      //  $scope.modl=function(){

      //  }
      $scope.validEmail = /^[a-z]+[@][a-z]+[.]+[a-z]*$/;
      $scope.formData ={};

           $scope.contactsubmit = function(formData) {
         console.log("hi contact");
           NavigationService.ContactSave(formData, function (data) {
             console.log("m in give",data);
             if(data){
                $scope.show = true;
            $timeout(function() {
                        $scope.show = false;
                        $scope.formData = {};
                    }, 2000);
             }
           });
 
       };

      // $scope.subscribe=function(email){
      //   console.log("email",email);
      //   if(email.email){
      //     $scope.show = true;
      //       $timeout(function() {
      //                   $scope.show = false;
      //                   $scope.subscribeForm = {};
      //               }, 2000);
      //   }
        
      // } 


console.log("im in footer");
 $scope.pages = [ // Taken from https://gist.github.com/unceus/6501985
      {
          name: 'Muttha Chambers I',
          code: 'kkk',
          link:'project({id:1})'
      }, {
          name: 'Muttha Chambers II',
          code: 'BH',
          link:'project({id:2})'
      }, {
          name: 'Muttha Towers',
          code: 'AA',
          link:'project({id:4})'
      }, {
          name: 'Muttha Symphony',
          code: 'D',
          link:'project({id:5})'
      },
      {
          name: 'Muttha Business Center',
          code: 'll',
          link:'project({id:6})'
      }
  ];
    })

  .controller('headerctrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });

        $scope.menu = "menu-out";
    $scope.getMenu = function() {
        $(".side-menu").addClass("menu-in");
        $(".side-menu").removeClass("menu-out");
    };
    $scope.closeMenu = function() {
        $(".side-menu").removeClass("menu-in");
        $(".side-menu").addClass("menu-out");
    };
    $(".template.content").click(function() {
        $(".side-menu").removeClass("menu-in");
        $(".side-menu").addClass("menu-out");
    });


  $scope.pages = [ // Taken from https://gist.github.com/unceus/6501985
      {
          name: 'Muttha Chambers I',
          code: 'kkk',
          link:'project({id:1})'
      }, {
          name: 'Muttha Chambers II',
          code: 'BH',
          link:'project({id:2})'
      }, {
          name: 'Muttha Towers',
          code: 'AA',
          link:'project({id:4})'
      }, {
          name: 'Muttha Symphony',
          code: 'D',
          link:'project({id:5})'
      },
       {
          name: 'Muttha Business Center',
          code: 'll',
          link:'project({id:6})'
      }
  ];
    // $.fancybox.close(true);
})
