angular.module('ui.bootstrap.demo', ['ui.bootstrap']).controller('AccordionDemoCtrl', function($scope) {
  $scope.oneAtATime = true;

  $scope.data = [{
    name: 'Dr. Batra',
    address: 'Karve Nagar',
    phone: '9970428444',
    amount: 5000,
    due: 3000,
    patients: [{
      name: 'Dhiraj Agarwal',
      address: 'Pune',
      phone: '9970428444'
    }, {
      name: 'Poonam Agarwal',
      address: 'KundanNagar',
      phone: '9970428444'
    }]
  }, {
    name: 'Dr. Sohoni',
    address: 'Aundh',
    phone: '9970428444',
    amount: 6000,
    due: 2000,
    patients: [{
      name: 'Suresh Agarwal',
      address: 'Khadki',
      phone: '9970428444'
    }, {
      name: 'Usha Agarwal',
      address: 'Vishalnagar',
      phone: '9970428444'
    }]
  }, ];

  $scope.addDoctor = function() {
    $scope.data.push({
      name: $scope.doctorName,
      address: $scope.doctorAddress,
      patients : []
    });
    $scope.doctorName = '';
    $scope.doctorAddress = '';
  };

  $scope.addPatientData = function(index, patName, patAddress) {
    $scope.data[index].patients.push({
      name: patName,
      address: patAddress
    });
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
}).directive('patientadd', function() {
  return {
    restrict: 'E',
    templateUrl: 'addpatient.html',
    scope: {
      index: '@'
    },
    link: function(scope) {
      scope.addPatient = function() {
        scope.$parent.addPatientData(scope.index, scope.namePatient, scope.addressPatient);
        scope.namePatient = '';
        scope.addressPatient = '';
      };
    }
  }
});
