(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('WalletFormCtrl', WalletFormCtrl);

  /** @ngInject */
  function WalletFormCtrl($scope, $http) {
   var vm = this;

    vm.personalInfo = {};
    vm.productInfo = {};
    vm.shipment = {};

    vm.statusItem = {};
    vm.statusSelectItems = [
      {label: 'Active', value: "ACTIVE"},
      {label: 'Option 2', value: 2},
      {label: 'Option 3', value: 3},
      {label: 'Option 4', value: 4}
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
    var parameter = JSON.stringify({$class:"com.disc.businessNetwork.Wallet", customerID: customerID.value, username:username.value , email: email.value, accountStatus:"ACTIVE" });
    $http.post('/api/Customer', parameter).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
      console.log('successfully added');

      // $scope.customerData = response.data
      // customerID.value = ""
      // username.value = ""
      // email.value = ""
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
