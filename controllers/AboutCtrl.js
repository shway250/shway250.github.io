jacksonSite.controller('AboutCtrl', ['$scope', function($scope) {
  $scope.aboutImg = '../portfolio-site/img/tattoo-wedding-picture.JPG';
  $scope.aboutText = "Jackson Duhon was born in the barren wasteland of Rochester, MN. At the age of 11 months he grew tired of the biting cold and moved to Austin, TX; where the days are as long as the tacos are delicious, and Willie Nelson roams the streets singing songs about cowboys he's never met. Growing up in Texas gave Jackson the values and the skills necesary to survive in 20th century America...unfortunately for Jackson it became the 21st century when he turned 11. At the age of 25 Jackson enroled in the Music Technology, Interaction, Intelligence, and Design program at the prestegious California Institute of the Arts. After spending a year in LA, graduating, and learning a life's worth about music technology, he moved to Seattle to live with his wife, Elizabeth, who is currently in graduate school. Jackson now spends all his time teaching himself how to build cool stuff on the internet, though it's not uncommon for him to watch Netflix for 14 hours straight. Jackson's a pretty cool dude, everyone says so.";


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
