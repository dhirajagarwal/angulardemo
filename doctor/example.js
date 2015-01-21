angular.module('ui.bootstrap.demo', ['ui.bootstrap']).controller('AccordionDemoCtrl', function($scope) {
  $scope.oneAtATime = true;

  $scope.data = [{
    name: 'Dr. Batra',
    address: 'Karve Nagar',
    patients: [{
      name: 'Dhiraj Agarwal',
      address: 'Pune'
    }, {
      name: 'Poonam Agarwal',
      address: 'KundanNagar'
    }]
  }, {
    name: 'Dr. Sohoni',
    address: 'Aundh',
    patients: [{
      name: 'Suresh Agarwal',
      address: 'Khadki'
    }, {
      name: 'Usha Agarwal',
      address: 'Vishalnagar'
    }]
  }, ];

  $scope.addDoctor = function() {
    $scope.data.push({
      name: $scope.doctorName,
      address: $scope.doctorAddress
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
        scope.$parent.addPatientData(scope.index,scope.namePatient,scope.addressPatient);
        scope.namePatient = '';
        scope.addressPatient = '';
      };
    }
  }
});
