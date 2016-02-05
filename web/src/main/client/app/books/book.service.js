angular.module('app.books').factory('bookService', function (bookRestService) {
    'use strict';

    return {
        search: function (titlePrefix) {
            return bookRestService.search(titlePrefix);
        },
        deleteBook: function (bookId) {
            return bookRestService.deleteBook(bookId);
        },
        addTheBook: function(book) {
          return bookRestService.addTheBook(book);
        },
        editTheBook: function(book) {
          return bookRestService.editTheBook(book);
        }
    };
});
