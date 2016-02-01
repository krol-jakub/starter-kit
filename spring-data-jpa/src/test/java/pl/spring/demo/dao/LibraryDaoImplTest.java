package pl.spring.demo.dao;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import pl.spring.demo.entity.LibraryEntity;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "CommonDaoTest-context.xml")
public class LibraryDaoImplTest {
	
	@Autowired
	private LibraryDao libraryDao;
	
	@Test
	public void shouldFindLibraryByPrefix() {
		//given
		LibraryEntity library = new LibraryEntity(new Long(1), "Aleksandryjska Biblioteka");
		libraryDao.save(library);
		String prefix = "aleks";
		
		//when
		List<LibraryEntity> result = libraryDao.findLibraryByName(prefix);
		
		//then
		assertNotNull(result);
		assertTrue(result.contains(library));
	}

}
