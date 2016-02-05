angular.module('app.books').controller('EditBookModalController', function ($scope, $modalInstance, bookService, Flash, book) {
    'use strict';
    $scope.book = book;
    $scope.title = $scope.book.title;
    $scope.comment = 'Sometext';

    $scope.buttonClic = function() {
      $scope.comment = 'Dummy button clicked';
    }

    $scope.editTheBook = function () {
        $scope.book.title = $scope.title;
        bookService.editTheBook($scope.book).then(function () {
            $modalInstance.close();
            Flash.create('success', 'Book edited', 'custom-class');
        },function () {
            Flash.create('danger', 'Book could not be edited', 'custom-class');
        });
    };
});
