angular.module('app.authors').controller('AuthorModalController', function ($scope, $modalInstance, authorsService, Flash) {
    'use strict';

    $scope.author = {};

    $scope.addThatAuthor = function(author) {
        $scope.comment = 'ddd';
        authorsService.addTheAuthor(author).then(function () {
            $modalInstance.close();
            Flash.create('success', 'Author added', 'custom-class');
        },function () {
            Flash.create('danger', 'Author could not be added', 'custom-class');
        });
      };

});
