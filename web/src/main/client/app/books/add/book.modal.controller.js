angular.module('app.books').controller('BookModalController', function ($scope, $modalInstance, bookService, authorsService) {
    'use strict';

    $scope.book = {};
    $scope.book.authors = [];

    $scope.addThatBook = function(book) {
        bookService.addTheBook(book);
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
