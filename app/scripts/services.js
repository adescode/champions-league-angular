angular
 .module('championsLeague')
 .factory('LeagueService', ['$http', function ($http) {
  return {
   getDetails: function () {
    return $http.get('api/details')
   },

   getTeamList: function () {
    return $http.get('/api/topteam')
   },

   getTeamDetails: function (club) {
    return $http.get('/api/team/' + club)
   },

   getTopScorer: function () {
    return $http.get('/api/topscorer')
   },

   getMostApp: function () {
    return $http.get('/api/mostapp')
   }
  }
 }]);