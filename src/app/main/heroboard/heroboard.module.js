(function ()
{
    'use strict';

    angular
        .module('app.heroboard', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.heroboard', {
                url    : '/heroboard',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/heroboard/heroboard.html',
                        controller : 'HeroboardController as vm'
                    }
                },
                resolve: {
                    Data: function (msApi)
                    {
                        return msApi.resolve('heroboard@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/heroboard');

        // Api
        msApiProvider.register('heroboard', ['app/data/heroboard/heroboard.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'Navigation',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.heroboard', {
            title    : 'Leader Board',
            icon     : 'icon-chart-bar',
            state    : 'app.heroboard',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'HEROBOARD.HEROBOARD_NAV',
            weight   : 1
        });
    }
})();