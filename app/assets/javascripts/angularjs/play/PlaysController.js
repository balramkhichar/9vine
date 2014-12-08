videoApp.controller("PlaysController", ['$scope','$stateParams','$http', '$sce',function ($scope,$stateParams,$http,$sce) {
  $http.get("/api/v1/videos/"+$stateParams.id).success(function(response) {
    $scope.video = response.videos;
    var videoUrl = "http://www.youtube.com/embed/"+response.videos[0].yid+"?modestbranding=1&showinfo=0&autoplay=1&iv_load_policy=3";
    $scope.url   = $sce.trustAsResourceUrl(videoUrl);
  });

  $http.get("/api/v1/suggestions").success(function(response) {
    $scope.suggestions = response.suggestions;
  });

}]);