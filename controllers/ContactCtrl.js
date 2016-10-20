jacksonSite.controller('ContactCtrl', ['$scope', function($scope) {
  $scope.email = 'jackson_duhon@yahoo.com';
  $scope.linkedInImg = '../portfolio-site/img/linkedin-2-48.png';
  $scope.gitHubImg = '../portfolio-site/img/github-9-48.png';
  $scope.emailImg = '../portfolio-site/img/email-14-48.png';
  $scope.linkedIn = "https://www.linkedin.com/in/jackson-duhon"
  $scope.gitHub = "https://github.com/shway250"

  $scope.scroll = function() {
    var paths = ['/', '/about', '/portfolio', 'experience', 'skills'];
    var index = paths.indexOf($location.path);

    if(index !== -1) {
      $location.path = paths[index + 1]
    } else {
      $location.path = paths[0];
    }
  }

}])
