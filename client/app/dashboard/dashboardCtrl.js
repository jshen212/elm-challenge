elmApp.controller('dashboardCtrl', function($scope){

  $scope.episode1 = '2QkLK7EG1Hw';

  $scope.analyzer = {};
  $scope.timeElapsed = 0;
  $scope.videoLength = 0;
  $scope.completed;
  $scope.tab1 = true;
  $scope.tab2 = false;
  $scope.tab3 = false;
  $scope.date = moment(Date.now()).format('MMMM D, YYYY');
  $scope.clickedTab = false;

  $scope.$on('youtube.player.playing', function($event, player) {
    $scope.videoLength = player.getDuration();
    $scope.player = player;
    //start polling
    setInterval(function() {
      $scope.timeElapsed = $scope.player.getCurrentTime();
      $scope.analyzer[$scope.timeElapsed / $scope.videoLength] = true;
      $scope.completed = parseFloat(($scope.timeElapsed / $scope.videoLength)*100).toFixed(2);
      $scope.$apply();

      if(!$scope.clickedTab) {
        if($scope.completed >= 27.08){
          $scope.tab1 = false;
          $scope.tab2 = true;
          $scope.tab3 = false;
        }

        if($scope.completed >= 62.08){
          $scope.tab1 = false;
          $scope.tab2 = false;
          $scope.tab3 = true;
        }
      }
    }, 3000);
  });

  $scope.getPctCompleted = function() {
    return Object.keys($scope.analyzer).length / (parseInt($scope.videoLength / 10));
  };

  $scope.totalCompleted = function(){
    $scope.completed = setInterval($scope.getPctCompleted(), 3000) + '%';
  };

  $scope.clickTab1 = function(){
    $scope.clickedTab = true;
    $scope.tab1 = true;
    $scope.tab2 = false;
    $scope.tab3 = false;
  }

  $scope.clickTab2 = function(){
    $scope.clickedTab = true;
    $scope.tab1 = false;
    $scope.tab2 = true;
    $scope.tab3 = false;
  }

  $scope.clickTab3 = function(){
    $scope.clickedTab = true;
    $scope.tab1 = false;
    $scope.tab2 = false;
    $scope.tab3 = true;
  }
});
