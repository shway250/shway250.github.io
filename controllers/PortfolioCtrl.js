jacksonSite.controller('PortfolioCtrl', ['$scope', function($scope) {
  //links
  $scope.accioBikeLink = 'https://accio-bike.herokuapp.com/';
  $scope.wubbaLubbaLink = 'https://shway250.github.io/Rick-Morty-Four-Square/';
  $scope.artemisLink = 'http://artemistracker.herokuapp.com/';
  $scope.euclidLink = 'https://miguelapou.github.io/Euclid/';
  //images
  $scope.wubbaLubbaImg = '../portfolio-site/img/wubba-lubba.png';
  $scope.accioBikeImg = '../portfolio-site/img/accio-bike.png';
  $scope.artemisImg = '../portfolio-site/img/artemis.png';
  $scope.euclidImg = '../portfolio-site/img/euclid.png';
  //descriptions
  $scope.wubbaLubbaDesc = 'A front end Connect Four game based off the cartoon "Rick and Morty". Technologies used include HTML, CSS, Javascript, jQuery, GitHub.'
  $scope.accioBikeDesc = 'A full stack web application for storing information about your bike and web crawling through Craigslist to help find it if it is stolen. Technologies used include HTML, CSS, Javascritp, Ruby on Rails, NokoGiri, GitHub.'
  $scope.artemisDesc = 'A full stack web application that helps you keep track of all the applications you’re sending during a job search. Technologies used include MongoDb, Express, Angular.js, Node.js. Won first place in the GA MEAN stack Hackathon'
  $scope.euclidDesc = 'A front end FM Synthesizer. Allows the user to create generative compositions using just the browser. Technologies used include HTML, CSS, Javascript, Canvas, P5.js.'
  

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
