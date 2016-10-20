jacksonSite.controller('MainCtrl', ['$scope', function($scope) {
  $scope.mainText = 'I am a full stack web developer with a passion for music technology and digital media. In my work I seek to unify aesthetic design with exacting functionality.';
  $scope.mainImg = '../portfolio-site/img/portfolio_profile_pick.jpg';

  $scope.scroll = function() {
    $scope.paths = ['/', '/about', '/portfolio', 'experience', 'skills'];
    var index = $scope.paths.indexOf($location.path());

    if(index !== -1) {
      $location.path = $scope.paths[index + 1]
    } else {
      $location.path = $scope.paths[0];
    }
  }
}]);
