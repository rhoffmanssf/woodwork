angular.module('starter', ['ionic', 'starter.controllers', 'RESTConnection'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.run(['$rootScope', function($rootScope) {
    $rootScope.hideFooter = false;
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams) {
            $rootScope.hideFooter =
                toState.url === '/' ||
                toState.url === '/login' ||
                toState.url === '/register';
        }
    );

}])

.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('landing', {
            url: '/',
            templateUrl: 'templates/landing.html',
        })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html',
            controller: 'RegisterCtrl'
        })
        .state('lobby', {
            url: '/lobby',
            templateUrl: 'templates/lobby.html',
            controller: 'LobbyCtrl'
        })
        .state('schedule', {
            url: '/schedule',
            templateUrl: 'templates/schedule.html',
            controller: 'SchedCtrl'
        })
        .state('game', {
            url: '/game/{id}',
            templateUrl: 'templates/game.html',
            controller: 'GameCtrl'
        })
        .state('addGame', {
            url: '/addGame',
            templateUrl: 'templates/addGame.html',
            controller: 'SchedCtrl'
        })
        .state('opponents', {
            url: '/opponents',
            templateUrl: 'templates/opponents.html',
            controller: 'OppsCtrl'
        })
        .state('addTeam', {
            url: '/addTeam',
            templateUrl: 'templates/addTeam.html',
            controller: 'OppsCtrl'
        })
        .state('team', {
            url: '/team/{id}',
            templateUrl: 'templates/team.html',
            controller: 'TeamCtrl'
        })
        .state('statistics', {
            url: '/statistics',
            templateUrl: 'templates/statistics.html',
            controller: 'GameCtrl'
        });
})

.factory('gamesFact', [
    function() {
        var g = {
            gamesArray: [
                // {
                //     date: 'May 3',
                //     time: '6:00pm',
                //     opponent: 'Raptors',
                //     notes: [
                //         {
                //             gameNotes: 'fast forward'
                //         }
                //     ],
                //     outcome: [
                //         {
                //             result: 'Win',
                //             goalsFor: 5,
                //             goalsAgainst: 4,
                //             goalsScored: 2,
                //             assistsMade: 1
                //         }
                //     ]
                // }
            ]
        };
        return g;
    }
])

.factory('resultsFact', [
    function() {
        var r = {
            resultsArray: [
                {
                    goalsForTotal: 0,
                    goalsAgainstTotal: 0,
                    goalsScoredTotal: 0,
                    assistsMadeTotal: 0,
                    outcomesTotal: 0
                }
            ]
        };
        return r;
    }
])

.factory('oppsFact', [
    function() {
        var o = {
            oppsArray: [
                // 'Still Kickin',
                // 'Nacho Mamas',
                // 'Meatballs FC',
                // 'Hot Shots',
                // 'Raptors'
            ]
        };
        return o;
    }
]);