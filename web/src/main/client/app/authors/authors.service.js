angular.module('app.authors').factory('authorsService', function (authorsRestService) {
    'use strict';

    return {
        search: function (titlePrefix) {
            return authorsRestService.search(titlePrefix);
        },
        deleteAuthor: function (authorId) {
            return authorsRestService.deleteAuthor(authorId);
        },
        addTheAuthor: function(author) {
          return authorsRestService.addTheAuthor(author);
        }
    };
});
