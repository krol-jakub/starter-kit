angular.module('app.books').controller('BookModalController', function ($scope, Flash, $modalInstance, bookService, authorsService) {
    'use strict';

    $scope.book = {};
    $scope.book.authors = [];
    $scope.comment = '';

    $scope.addThatBook = function(book) {
      bookService.addTheBook(book).then(function () {
          $modalInstance.close();
          Flash.create('success', 'Book added', 'custom-class');
      },function () {
          Flash.create('danger', 'Book could not be added', 'custom-class');
      });
    };


  $scope.addAuthor = function() {
    var newItemNo = $scope.book.authors.length+1;
    $scope.book.authors.push({});
  };

  $scope.removeAuthor = function() {
    var lastItem = $scope.book.authors.length-1;
    $scope.book.authors.splice(lastItem);
  };

});
