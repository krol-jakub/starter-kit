package pl.spring.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import pl.spring.demo.mapper.AuthorMapper;
import pl.spring.demo.repository.AuthorRepository;
import pl.spring.demo.service.AuthorService;
import pl.spring.demo.to.AuthorTo;

@Service
@Transactional(readOnly = true)
public class AuthorServiceImpl implements AuthorService {

	@Autowired
	private AuthorRepository authorRepository;
	
	public AuthorServiceImpl() {
		
	}

	@Override
	public List<AuthorTo> findAllAuthors() {
		return AuthorMapper.mapListTo(authorRepository.findAll());
	}

	@Override
	public List<AuthorTo> findAuthorByName(String name) {
		return AuthorMapper.mapListTo(authorRepository.findByName(name));
	}

	@Override
	@Transactional(readOnly = false)
	public AuthorTo saveAuthor(AuthorTo author) {
		return AuthorMapper.map(authorRepository.save(AuthorMapper.map(author)));
	}

	@Override
	@Transactional
	public void deleteAuthor(Long id) {
		authorRepository.delete(id);
	}

}
