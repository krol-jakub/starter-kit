angular.module('app.books').controller('BookModalController', function ($scope, $modalInstance, bookService) {
    'use strict';

    $scope.title = 'title';
    $scope.book = {};
    $scope.book.authors = [];

    $scope.addThatBook = function() {
      $scope.comment = "Gunwo";
      if($scope.book.title.length > 0 && $scope.book.authors[0].firstName.length > 0 && $scope.book.authors[0].lastName.length > 0) {
        bookService.save($scope.book).then(function(response) {
          $modalInstance.close(response.data);
        }, function(error) {
          $modalInstance.dismiss(error.status);
        });
        $scope.comment = "Book saved!";
      } else {
        $scope.comment = "Wypelnij wymagane pola";
      }

    }

});
