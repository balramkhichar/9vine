var videoApp = angular.module('videoApp', ["ui.router"]);

videoApp.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('watch', {
      url: "/videos/:id",
      templateUrl: "video.html",
      controller: "PlaysController"
    })
    .state('/', {
      url: "/",
      templateUrl: "home.html",
      controller: "VideosController"
    });

}]);
