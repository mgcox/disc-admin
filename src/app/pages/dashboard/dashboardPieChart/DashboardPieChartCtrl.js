/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardPieChartCtrl', DashboardPieChartCtrl);

  /** @ngInject */
  function DashboardPieChartCtrl($scope, $http,$timeout, baConfig, baUtil) {

    var custTotal = 0;
    var customerAccounts = 0;
    var purchases = 0;



    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
    $scope.charts = [{
      color: pieColor,
      description: 'New Identities',
      stats: '57,820',
      icon: 'person',
    }, {
      color: pieColor,
      description: 'Available Funds',
      stats: '$ ' + 0,
      icon: 'money',
    }, {
      color: pieColor,
      description: 'Active Users',
      stats: '178,391',
      icon: 'face',
    }, {
      color: pieColor,
      description: 'Returned',
      stats: '32,592',
      icon: 'refresh',
    }
    ];

    $http.get('/api/Wallet').then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
      console.log('success');
      

      $scope.smartTableData = response.data;
      $scope.smartTableData1 = response.data;

  
         
          for(var i = 0; i < $scope.smartTableData.length; i++){
              var balance = $scope.smartTableData[i].balance;
              custTotal += balance;
          }

        

          $scope.charts[1] =  {
            color: pieColor,
            description: 'Customer Funds',
            stats: '$ ' + custTotal,
            icon: 'money',
          };


       $timeout(function () {
      loadPieCharts();
      updatePieCharts();
        }, 1000);
     
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('failed');
      return 5;
    });

    $http.get('/api/Customer').then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
      console.log('success');

      $scope.customerData = response.data
      customerAccounts = $scope.customerData.length;
      $scope.charts[0] =  {
            color: pieColor,
            description: 'Accounts',
            stats: customerAccounts,
            icon: 'person',
      };

      $timeout(function () {
      loadPieCharts();
      updatePieCharts();
        }, 1000);

    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('failed');
    });


    $http.get('/api/Purchase').then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
      console.log('success');
      

      $scope.purchaseData = response.data;

      for(var i = 0; i < $scope.purchaseData.length; i++){
          var price = $scope.purchaseData[i].price;
          purchases += price;
      }

      console.log(purchases)

          $scope.charts[2] =  {
            color: baConfig.colors.successLight,
            description: 'Daily Transactions',
            stats: $scope.purchaseData.length,
            icon: 'refresh',
          };

          $scope.charts[3] =  {
            color: baConfig.colors.successLight,
            description: 'Est. Revenue',
            stats: '$ ' + purchases,
            icon: 'money',
          };



       $timeout(function () {
      loadPieCharts();
      updatePieCharts();
        }, 1000);
     
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('failed');
      return 5;
    });

    $http.get('/api/Customer').then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
      console.log('success');

      $scope.customerData = response.data
      customerAccounts = $scope.customerData.length;
      $scope.charts[0] =  {
            color: pieColor,
            description: 'Accounts',
            stats: customerAccounts,
            icon: 'person',
      };

      $timeout(function () {
      loadPieCharts();
      updatePieCharts();
        }, 1000);

    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('failed');
    });


    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    function loadPieCharts() {
      $('.chart').each(function () {
        var chart = $(this);
        chart.easyPieChart({
          easing: 'easeOutBounce',
          onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          },
          barColor: chart.attr('rel'),
          trackColor: 'rgba(0,0,0,0)',
          size: 84,
          scaleLength: 0,
          animation: 2000,
          lineWidth: 9,
          lineCap: 'round',
        });
      });

      $('.refresh-data').on('click', function () {
        updatePieCharts();
      });
    }

    function updatePieCharts() {
      $('.pie-charts .chart').each(function(index, chart) {
        $(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
      });
    }

    // $timeout(function () {
    //   loadPieCharts();
    //   updatePieCharts();
    // }, 1000);
  }
})();