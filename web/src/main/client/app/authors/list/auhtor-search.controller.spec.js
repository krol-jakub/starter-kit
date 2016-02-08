describe('author controller', function () {
    'use strict';

    beforeEach(function () {
        module('app.authors');
    });

    var $scope;
    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new();
    }));

    it('search is defined', inject(function ($controller) {
        // when
        $controller('AuthorSearchController', {$scope: $scope});
        // then
        expect($scope.search).toBeDefined();
    }));

    it('adding author is defined', inject(function($controller) {
        //when
        $controller('AuthorModalController', {$scope: $scope});
        //then
        expect($scope.addThatAuthor).toBeDefined();

    }));

});
