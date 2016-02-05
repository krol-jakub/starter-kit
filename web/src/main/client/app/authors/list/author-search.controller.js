angular.module('app.authors').controller('AuthorSearchController', function ($scope, $window, $location, authorsService, Flash, $modal) {
    'use strict';

    $scope.authors = [];
    $scope.prefix = '';
    $scope.gridOptions = { data: 'authors' };

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

    $scope.editAuthor = function(author) {
      $modal.open({
        templateUrl: 'authors/edit/edit-author-modal.html',
        controller: 'EditAuthorModalController',
        size: 'lg',
        resolve : {
          author : function() {
            return author;
          }
        }
      });
    };

});
