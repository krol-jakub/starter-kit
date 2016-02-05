angular.module('app.authors').factory('authorsRestService', function ($http, currentContextPath) {
    'use strict';

    return {
        search: function (titlePrefix) {
            return $http.get(currentContextPath.get() + 'services/authors/authors-by-name', {params: {titlePrefix: titlePrefix}});
        },
        deleteAuthor: function (authorId) {
            return $http.delete(currentContextPath.get() + 'services/authors/author/' + authorId);
        },
        addTheAuthor: function (author) {
          return $http.post(currentContextPath.get() + 'services/authors/author', author, {timeout: 10000});
        },
        editTheAuthor: function (author) {
          return $http.post(currentContextPath.get() + 'services/authors/author', author, {timeout: 10000});
        }
    };
});
