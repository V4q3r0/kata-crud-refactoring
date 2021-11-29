package co.com.sofka.crud.todo;

import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class TodoController {

    @Autowired
    TodoService todoService;

    @PostMapping(path = "/todo")
    public Todo addTodo(@RequestBody Todo todo) throws Exception {
        return todoService.addTodo(todo);
    }

    @GetMapping(path = "/{idList}/todos")
    public ArrayList<Todo> getTodoByIdList(@PathVariable("idList") Long idList){
        return todoService.getTodoByIdList(idList);
    }

    @DeleteMapping(path = "/todo/{id}")
    public void deleteTodoById(@PathVariable("id") Long id) throws NotFoundException {
        todoService.deleteTodoById(id);
    }
}
