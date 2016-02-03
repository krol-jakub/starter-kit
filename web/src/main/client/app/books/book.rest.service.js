angular.module('app.books').factory('bookRestService', function ($http, currentContextPath) {
    'use strict';

    return {
      saveBook: function(book) {
        return $http.post(currentContextPath.get() + 'services/books/book', book {timeout: 10000});
      },
        search: function (titlePrefix) {
            return $http.get(currentContextPath.get() + 'services/books/books-by-title', {params: {titlePrefix: titlePrefix}});
        },
        deleteBook: function (bookId) {
            return $http.delete(currentContextPath.get() + 'services/books/book/' + bookId);
        }
    };
});
