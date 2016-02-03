angular.module('app.authors', ['ngRoute', 'app.main', 'ui.bootstrap', 'flash']).config(function ($routeProvider) {
    'use strict';

    $routeProvider.when('/authors/authors-list', {
        templateUrl: 'authors/list/authors-list.html',
        controller: 'AuthorSearchController'
    });
    //$routeProvider.when('/books/add-book', {
    //    templateUrl: 'books/add/add-book.html'
    //});
});
