(function ()
{
    'use strict';

    angular
        .module('app.leaderboard', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.leaderboard', {
                url    : '/leaderboard',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/leaderboard/leaderboard.html',
                        controller : 'LeaderboardController as vm'
                    }
                },
                resolve: {
                    Data: function (msApi)
                    {
                        return msApi.resolve('leaderboard@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/leaderboard');

        // Api
        msApiProvider.register('leaderboard', ['app/data/leaderboard/leaderboard.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'Navigation',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.leaderboard', {
            title    : 'Leader Board',
            icon     : 'icon-tile-four',
            state    : 'app.leaderboard',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'LEADERBOARD.LEADERBOARD_NAV',
            weight   : 1
        });
    }
})();