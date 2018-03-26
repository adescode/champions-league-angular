angular
 .module('championsLeague', ['ngRoute'])
 .config(function ($routeProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'views/main.html',
    controller: 'LeagueDetails'
   })
   .when('/team_list', {
    templateUrl: 'views/team_list.html',
    controller: 'TeamListCtrl'
   })
   .when('/team/:club', {
    templateUrl: 'views/team_details.html',
    controller: 'TeamDetailsCtrl'
   })
   .when('/top_scorers',{
     templateUrl: 'views/top_scorers.html',
    controller: 'TopScorerCtrl'
   })
   .when('/most_app',{
    templateUrl: 'views/most_app.html',
    controller: 'MostAppCtrl'
   })
 });
