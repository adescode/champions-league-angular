angular
 .module('championsLeague', ['ngRoute'])
 .config(function ($routeProvider) {
  $routeProvider
   .when('/done', {
    templateUrl: 'views/main.html',
    controller: 'LeagueDetails'
   })
   .when('/gjgjgj', {
    templateUrl: 'views/team_list.html',
    controller: 'TeamListCtrl'
   })
   .when('/team/:club', {
    templateUrl: 'views/team_details.html',
    controller: 'TeamDetailsCtrl'
   })
   .when('/',{
     templateUrl: 'views/top_scorers.html',
    controller: 'TopScorerCtrl'
   })
   .when('/',{
    templateUrl: 'views/most_app.html',
    controller: 'MostAppCtrl'
   })
 });
