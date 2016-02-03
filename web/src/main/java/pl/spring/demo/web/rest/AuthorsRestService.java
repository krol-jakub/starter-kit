package pl.spring.demo.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import pl.spring.demo.service.AuthorService;
import pl.spring.demo.to.AuthorTo;

import java.util.List;

@RestController
@RequestMapping(value="/authors")
public class AuthorsRestService {

    @Autowired
    private AuthorService authorService;
    
    public AuthorsRestService() {
    	
    }

    @RequestMapping(value = "/authors-by-name", method = RequestMethod.GET)
    public List<AuthorTo> findAuthorsByName(@RequestParam(value = "titlePrefix", required = false) String titlePrefix) {
        if (StringUtils.isEmpty(titlePrefix)) {
            return authorService.findAllAuthors();
        }
        return authorService.findAuthorByName(titlePrefix);
    }

    @RequestMapping(value = "/author", method = RequestMethod.POST)
    public AuthorTo saveAuthor(@RequestBody AuthorTo author) {
        return authorService.saveAuthor(author);
    }

    @RequestMapping(value = "/author/{id}", method = RequestMethod.DELETE)
    public void deleteAuthor(@PathVariable("id") long id) {
        authorService.deleteAuthor(id);
    }
}
