///////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Defines the javascript files that need to be loaded and their dependencies.
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////

require.config({
    paths: {
        "angular": "../resources/angular/angular.min",
        "jquery": "../resources/jquery/dist/jquery.min",
        "bootstrap": "../resources/bootstrap/dist/js/bootstrap.min",
        "angular-animate": "../resources/angular-animate/angular-animate.min",
        "toaster": "../resources/AngularJS-Toaster/toaster.min",
        "ui-router": "../resources/angular-ui-router/release/angular-ui-router.min",
        "angular-animate": "../resources/angular-animate/angular-animate.min",
        "crm-app": "app"
    },
    shim: {
        "angular": {
            deps: ["jquery", "bootstrap"],
            exports: "angular"
        },
        "angular-animate": {
            deps: ["angular"]
        },
        "toaster": {
            deps: ["angular", "angular-animate"],
            exports: "toaster"
        },
        "ui-router": {
            deps: ["angular"]
        },
        "crm-app": {
            deps: ["angular", "ui-router", "toaster"]
        },
        "bootstrap": {
            deps: ["jquery"]
        }
    }

});

require(['crm-app'], function (app) {

    angular.bootstrap(document.getElementById('crm-app'), ['crm-app']);

});
