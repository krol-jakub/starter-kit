package pl.spring.demo.entity;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "LIBRARY")
public class LibraryEntity implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
	@Column(nullable = false, length = 50)
	private String name;
	
	@OneToMany(cascade = CascadeType.REMOVE, mappedBy = "library")
	private Set<BookEntity> books = new HashSet<>();
	
	protected LibraryEntity() {
	}
	
	public LibraryEntity(Long id, String name) {
        this.id = id;
        this.name = name;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<BookEntity> getBooks() {
		return books;
	}

	public void setBooks(Set<BookEntity> books) {
		this.books = books;
	}
	

}
