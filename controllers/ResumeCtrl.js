jacksonSite.controller('ResumeCtrl', ['$scope', function($scope) {
  $scope.resumePdfLink = '../portfolio-site/img/Resume.pdf';
  $scope.resumeTextLink = '../portfolio-site/img/jackson-duhon-text-resume';

  $scope.scroll = function() {
    var paths = ['/', '/about', '/portfolio', 'experience', 'skills'];
    var index = paths.indexOf($location.path);

    if(index !== -1) {
      $location.path = paths[index + 1]
    } else {
      $location.path = paths[0];
    }
  }
}]);
