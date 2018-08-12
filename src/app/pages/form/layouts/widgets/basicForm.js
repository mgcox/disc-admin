(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('BasicFormCtrl', BasicFormCtrl);

  /** @ngInject */
  function BasicFormCtrl($scope, $http) {
   var vm = this;

    vm.personalInfo = {};
    vm.productInfo = {};
    vm.shipment = {};

    vm.statusItem = {};
    vm.statusSelectItems = [
      {label: 'Active', value: "ACTIVE"},
      {label: 'Flagged', value: 2},
      {label: 'WARN', value: 3},
      {label: 'Deactivated", value: 4}
    ];


    $scope.submit = function($scope) {



//       {
//   "$class": "com.disc.businessNetwork.Customer",
//   "customerID": "string",
//   "username": "string",
//   "email": "string",
//   "accountStatus": "ACTIVE"
// }

      // build new customer object
    var parameter = JSON.stringify({$class:"com.disc.businessNetwork.Customer", customerID: customerID.value, username:username.value , email: email.value, accountStatus:"ACTIVE" });
    $http.post('/api/Customer', parameter).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
      console.log('successfully added');

      // $scope.customerData = response.data
      customerID.value = ""
      username.value = ""
      email.value = ""
      console.log("succssfully added")
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(parameter)
      console.log(response)
      console.log('failed');
    });
    }



   $scope.submitWallet = function($scope) {

// {
//   "$class": "com.disc.businessNetwork.Wallet",
//   "walletId": "5293",
//   "balance": 0,
//   "owner": "resource:com.disc.businessNetwork.Company#5600"
// }

      // build new customer object
    var parameter = JSON.stringify({$class:"com.disc.businessNetwork.Wallet", walletId: walletID.value, owner: "resource:com.disc.businessNetwork.Customer#" + owner.value, balance:balance.value  });
    $http.post('/api/Wallet', parameter).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
      console.log('successfully added');

      // $scope.customerData = response.data
      walletID.value = ""
      owner.value = ""
      balance.value = ""
      console.log("succssfully added")
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
