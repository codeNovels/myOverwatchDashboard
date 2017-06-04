(function ()
{
    'use strict';

    angular
        .module('app.patchnote', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.patchnote', {
                url    : '/patchnote',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/patchnote/patchnote.html',
                        controller : 'PatchnoteController as vm'
                    }
                },
                resolve: {
                    Data: function (msApi)
                    {
                        return msApi.resolve('patchnote@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/patchnote');

        // Api
        msApiProvider.register('patchnote', ['app/data/patchnote/patchnote.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'Navigation',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.patchnote', {
            title    : 'Leader Board',
            icon     : 'icon-newspaper',
            state    : 'app.patchnote',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'PATCHNOTE.PATCHNOTE_NAV',
            weight   : 1
        });
    }
})();