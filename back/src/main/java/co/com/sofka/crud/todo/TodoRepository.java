package co.com.sofka.crud.todo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TodoRepository extends CrudRepository<Todo, Long> {

}
