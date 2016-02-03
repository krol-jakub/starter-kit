package pl.spring.demo.mapper;

import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import pl.spring.demo.entity.AuthorEntity;
import pl.spring.demo.to.AuthorTo;

public class AuthorMapper {
	
	public AuthorMapper() {
		
	}

	public static AuthorTo map(AuthorEntity authorEntity) {
		if (authorEntity != null) {
			return new AuthorTo(authorEntity.getId(), authorEntity.getFirstName(), authorEntity.getLastName());
		}
		return null;
	}

	public static AuthorEntity map(AuthorTo authorTo) {
		if(authorTo != null) {
			return new AuthorEntity(authorTo.getId(), authorTo.getFirstName(), authorTo.getLastName(), null);
		}
		return null;
	}
	
	public static List<AuthorTo> mapListTo(Collection<AuthorEntity> authors) {
		return authors.stream().map(AuthorMapper::map).collect(Collectors.toList());
	}
	
	public static Set<AuthorEntity> mapListEntity(Collection<AuthorTo> authors) {
		return authors.stream().map(AuthorMapper::map).collect(Collectors.toSet());
	}
}
