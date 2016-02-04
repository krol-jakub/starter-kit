angular.module('app.authors').controller('AuthorSearchController', function ($scope, $window, $location, authorsService, Flash, $modal) {
    'use strict';

    $scope.authors = [];
    $scope.prefix = '';
    $scope.gridOptions = { data: 'authors' };

    var removeAuthorById = function (authorId) {
        for (var i = 0; i < $scope.authors.length; i = i + 1) {
            if ($scope.authors[i].id === authorId) {
                $scope.authors.splice(i, 1);
                break;
            }
        }
    };

    $scope.search = function () {
        authorsService.search($scope.prefix).then(function (response) {
            angular.copy(response.data, $scope.authors);
        }, function () {
            Flash.create('danger', 'Exception', 'custom-class');
        });
    };

    $scope.addAuthor = function () {
        $modal.open({
            templateUrl: 'authors/add/add-author-modal.html',
            controller: 'AuthorModalController',
            size: 'lg'
        });
    };

});
