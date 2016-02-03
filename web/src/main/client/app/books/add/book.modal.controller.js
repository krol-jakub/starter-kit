angular.module('app.books').controller('BookModalController', function ($scope, $modalInstance, bookService, authorsService) {
    'use strict';

    $scope.book = {};
    $scope.book.authors = [];

    $scope.addThatBook = function(book) {
        $scope.comment = 'Sukces?';
        authorsService.addTheAuthor(book.authors);
        bookService.addTheBook(book);
    };

});
