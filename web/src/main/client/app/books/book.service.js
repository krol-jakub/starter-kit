angular.module('app.books').factory('bookService', function (bookRestService) {
    'use strict';

    return {
      save: function(book) {
        return bookRestService.saveBook(book);
      },
        search: function (titlePrefix) {
            return bookRestService.search(titlePrefix);
        },
        deleteBook: function (bookId) {
            return bookRestService.deleteBook(bookId);
        }
    };
});
