define([], function () {
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('/', {
            url: '/select',
            templateUrl: 'scripts/crm-app/crm-curd/select.html'
        })
        .state('create', {
            url: '/create',
            templateUrl: 'scripts/crm-app/crm-curd/create.html'
        }).state('update', {
            url: '/update',
            templateUrl: 'scripts/crm-app/crm-curd/update.html'
        }).state('delete', {
            url: '/delete',
            templateUrl: 'scripts/crm-app/crm-curd/delete.html'
        });
    }
    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    return config;
});

