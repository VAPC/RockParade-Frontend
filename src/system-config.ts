'use strict';

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
    // 'main': 'main.js'
};

/** User packages configuration. */
const packages: any = {
    // 'actions': {
    //     main: 'event.js',
    //     defaultExtension: 'js'
    // },
    // 'app': {
    //     main: 'index.js',
    //     defaultExtension: 'js'
    // },
    // 'effects': {
    //     main: 'EventEffects.js',
    //     defaultExtension: 'js'
    // },
    // 'events': {
    //     main: 'events.cmt.js',
    //     defaultExtension: 'js'
    // },
    // 'reducers': {
    //     main: 'index.js',
    //     defaultExtension: 'js'
    // },
    // 'routes': {
    //     main: 'routes.js',
    //     defaultExtension: 'js'
    // },
    // 'utils': {
    //     main: 'util.js',
    //     defaultExtension: 'js'
    // }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',

    // Thirdparty barrels.
    'rxjs',
    '@ngrx/core',
    '@ngrx/store',
    '@ngrx/effects',

    // App specific barrels.
    'app',
    'app/shared',
    'effects',
    'reducers',
    'routes'
    /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
    cliSystemConfigPackages[barrelName] = {main: 'index'};
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
    map: {
        'rxjs': 'vendor/rxjs',
        '@angular': 'vendor/@angular',
        // '@ngrx': 'vendor/@ngrx',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({map, packages});
