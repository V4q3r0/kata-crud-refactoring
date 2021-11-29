package co.com.sofka.crud.listTodo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ListTodoRepository extends CrudRepository<ListTodo, Long> {

}
