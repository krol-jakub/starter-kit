package pl.spring.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import pl.spring.demo.entity.AuthorEntity;

public interface AuthorRepository extends JpaRepository<AuthorEntity, Long> {
	
	@Query("SELECT author"
			+ " FROM AuthorEntity author"
			+ " WHERE UPPER(author.firstName)"
			+ " LIKE CONCAT(CONCAT('%', upper(:name)), '%')"
			+ " OR UPPER(author.lastName) LIKE CONCAT(CONCAT('%', UPPER(:name)), '%')")
	public List<AuthorEntity> findByName(@Param("name") String name);
	
}
