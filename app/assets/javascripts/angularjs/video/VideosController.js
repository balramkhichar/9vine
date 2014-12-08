videoApp.controller("VideosController", ['$scope','$http', function ($scope,$http) {
  $http.get("/api/v1/videos").success(function(response) {
    $scope.video = response.videos;
  });
}]);