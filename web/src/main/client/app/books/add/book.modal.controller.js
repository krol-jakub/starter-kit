angular.module('app.books').controller('BookModalController', function ($scope, Flash, $modalInstance, bookService, authorsService) {
    'use strict';

    $scope.book = {};
    $scope.book.authors = [];
    $scope.comment = 'Sometext';

    $scope.buttonClic = function() {
      $scope.comment = 'Dummy button clicked';
    }

    $scope.addThatBook = function(book) {
      // book.authors[0] meaning that at least one author is defined - fields not null
      if(book.title != '' && (book.authors[0].firstName != null && book.authors[0].lastName != null)) {
        bookService.addTheBook(book).then(function () {
            $modalInstance.close();
            Flash.create('success', 'Book added', 'custom-class');
          },function () {
            Flash.create('danger', 'Book could not be added', 'custom-class');
          });
        }
        else {
          $scope.comment = 'You must enter at least one author!';
        }
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
