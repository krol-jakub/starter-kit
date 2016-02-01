package pl.spring.demo.dao.impl;

import java.util.List;

import javax.persistence.TypedQuery;

import pl.spring.demo.dao.LibraryDao;
import pl.spring.demo.entity.LibraryEntity;

public class LibraryDaoImpl extends AbstractDao<LibraryEntity, Long> implements LibraryDao {
	
	@Override
	public List<LibraryEntity> findLibraryByName(String name) {
		TypedQuery<LibraryEntity> query = entityManager.createQuery(
                "SELECT book FROM LibraryEntity lib WHERE UPPER(lib.name) LIKE CONCAT(UPPER(:name), '%')", LibraryEntity.class);
        query.setParameter("name", name);
        return query.getResultList();
		
	}

}
