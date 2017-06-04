(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick Panel
            'app.quick-panel',

            // Leader Board
            'app.leaderboard',

            // Hero Board
            'app.heroboard',

            // Patch Note
            'app.patchnote'
        ]);
})();