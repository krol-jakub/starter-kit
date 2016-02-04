package pl.spring.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.spring.demo.entity.BookEntity;

import java.util.List;

public interface BookRepository extends JpaRepository<BookEntity, Long> {

    @Query("SELECT book"
    		+ " FROM BookEntity book"
    		+ " WHERE UPPER(book.title)"
    		+ " LIKE CONCAT(CONCAT('%',UPPER(:title),'%'))")
    public List<BookEntity> findBookByTitle(@Param("title") String title);

    @Query("select book from BookEntity book join book.authors authors where authors.firstName like %:author% or authors.lastName like %:author%")
    public List<BookEntity> findBookByAuthor(@Param("author") String author);
}
