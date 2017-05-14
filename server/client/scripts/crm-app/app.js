define(['./stateRouter/stateRouter', './customerController/customerController', './customerServices/customerServices'], function (config, customerController, customerServices) {
    var crmApp = angular.module('crm-app', ['ui.router', 'toaster']);
    crmApp.config(config);
    crmApp.controller('customerController', customerController);
    crmApp.service('customerServices', customerServices);

});
