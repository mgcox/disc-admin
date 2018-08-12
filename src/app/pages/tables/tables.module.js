/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tables', {
          url: '/tables',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'TablesPageCtrl',
          title: 'Tables',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          },
        }).state('tables.smart', {
          url: '/smart',
          templateUrl: 'app/pages/tables/smart/tables.html',
          title: 'Wallet Table',
          sidebarMeta: {
            order: 0,
          },
        }).state('tables.purchase', {
          url: '/purchase',
          templateUrl: 'app/pages/tables/purchase/tables.html',
          title: 'Purchase Table',
          sidebarMeta: {
            order: 2,
          },
        }).state('tables.basic', {
          url: '/basic',
          templateUrl: 'app/pages/tables/basic/tables.html',
          title: 'Customer Table',
          sidebarMeta: {
            order: 1,
          },
        });
    $urlRouterProvider.when('/tables','/tables/basic');
  }

})();
