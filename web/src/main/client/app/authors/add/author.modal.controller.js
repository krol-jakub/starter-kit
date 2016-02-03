angular.module('app.authors').controller('AuthorModalController', function ($scope, $modalInstance, authorsService) {
    'use strict';

    $scope.authors = {};

    $scope.addThatAuthor = function() {
        $scope.comment = 'ddd';
        authorsService.addTheAuthor(authors);
    };

});
