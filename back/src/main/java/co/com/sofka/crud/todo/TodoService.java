package co.com.sofka.crud.todo;

import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TodoService {

    @Autowired
    TodoRepository todoRepository;

    public Todo addTodo(Todo todo) throws Exception {
        if(todo.getName().isEmpty() || todo.getName().length() < 8){
            throw new Exception("El nombre debe tener al menos 8 caracteres.");
        }
        return todoRepository.save(todo);
    }

    public ArrayList<Todo> getTodoByIdList(Long idList){
        ArrayList<Todo> todos = (ArrayList<Todo>) todoRepository.findAll();
        ArrayList<Todo> todo = new ArrayList<>();
        for(Todo todo2: todos){
            if(idList.equals(todo2.getIdList())){
                todo.add(todo2);
            }
        }
        return todo;
    }

    public void deleteTodoById(Long id) throws NotFoundException {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("No se encontro tarea con id "+id));
        todoRepository.delete(todo);
    }
}
