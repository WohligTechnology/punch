
var adminurl = "http://104.155.129.33:94/";


var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [
  //   {
  //   name: "Know",
  //   classis: "active",
  //   link: "#/know",
  // },
  // {
  //   name: "Build",
  //   classis: "active",
  //   link: "#/build",
  // }
  // ,{
  //   name: "Give",
  //   classis: "active",
  //   link: "#/give",
  // }
  ];
      

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

      ContactSave: function(formdata,callback) {
            $http({
                url: adminurl + 'contact/save',
                method: 'POST',
                withCredentials: true,
                data: formdata
            }).success(callback);
        },

  };
});
