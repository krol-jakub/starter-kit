angular.module('app.authors').controller('EditAuthorModalController', function ($scope, $modalInstance, authorsService, Flash, author) {
    'use strict';

    $scope.author = author;
    $scope.firstName = $scope.author.firstName;
    $scope.lastName = $scope.author.lastName;
    $scope.comment = 'Sometext';

    $scope.buttonClic = function() {
      $scope.comment = 'Dummy button clicked';
    }

    $scope.editTheAuthor = function () {
        $scope.author.firstName = $scope.firstName;
        $scope.author.lastName = $scope.lastName;
        authorsService.editTheAuthor($scope.author).then(function () {
            $modalInstance.close();
            Flash.create('success', 'Author edited', 'custom-class');
        },function () {
            Flash.create('danger', 'Author could not be edited', 'custom-class');
        });
    };
});
