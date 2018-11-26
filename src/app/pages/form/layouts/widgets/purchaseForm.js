(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('PurchaseFormCtrl', PurchaseFormCtrl);

  /** @ngInject */
  function PurchaseFormCtrl($scope, $http) {
   var vm = this;

    vm.personalInfo = {};
    vm.productInfo = {};
    vm.shipment = {};

    vm.statusItem = {};

    $scope.submitPurchase = function($scope) {



//       {
//   "$class": "com.disc.businessNetwork.Customer",
//   "customerID": "string",
//   "username": "string",
//   "email": "string",
//   "accountStatus": "ACTIVE"
// }

      // build new customer object
    var parameter = JSON.stringify({$class:"com.disc.businessNetwork.Purchase", customerWallet: "resource:com.disc.businessNetwork.Wallet#" + customerWalletID.value, storeWallet: "resource:com.disc.businessNetwork.Wallet#"+storeID.value, price:price.value , tax: tax.value });
    $http.post('/api/Purchase', parameter).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
      console.log('purchase successful');

      // $scope.customerData = response.data
      // customerID.value = ""
      // username.value = ""
      // email.value = ""
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(parameter)
      console.log(response)
      console.log('failed');
    });
    };


  }

})();
