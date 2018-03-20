angular
 .module('championsLeague')

 .controller('LeagueDetails',
  ['$scope', 'LeagueService',
   function ($scope, LeagueService) {
    $scope.details = {};
    LeagueService.getDetails()
     .then(function (resp) {
      $scope.details = resp.data;
     })
   }])

 .controller('TeamListCtrl',
  ['$scope', 'LeagueService',
   function ($scope, LeagueService) {
    $scope.teams = [];

    LeagueService.getTeamList()
     .then(function (resp) {
      $scope.teams = resp.data;
     })
   }])

   .controller('TeamDetailsCtrl',
   ['$scope','$routeParams', 'LeagueService',
   function ($scope, $routeParams, LeagueService) {
    $scope.team = {};
    LeagueService.getTeamDetails($routeParams.club)
     .then(function (resp) {
      $scope.team = resp.data;
     })
   }])
   
   .controller('TopScorerCtrl',
   ['$scope', 'LeagueService',
    function ($scope, LeagueService) {
    $scope.topScorer={};

    LeagueService.getTopScorer()
     .then(function (resp) {
      $scope.topScorer=resp.data;
     })
   }])

   .controller('MostAppCtrl',
   ['$scope', 'LeagueService',
   function ($scope, LeagueService) {
    $scope.mostapp = {};

    LeagueService.getMostApp()
     .then(function (resp) {
      $scope.mostapp = resp.data;
     })
   }])