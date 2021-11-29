package co.com.sofka.crud.listTodo;

import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = {"${settings.cors_origin}"})
@RequestMapping("/api")
public class ListTodoController {

    @Autowired
    ListTodoService listTodoService;

    @PostMapping(path = "/listTodo")
    public ListTodo addList(@RequestBody ListTodo listTodo) throws Exception {
            return listTodoService.addListTodo(listTodo);
    }

    @GetMapping(path = "/listTodos")
    public ArrayList<ListTodo> getList(){
        return listTodoService.getAllListTodo();
    }

    @DeleteMapping(path = "/listTodo/{id}")
    public void deleteListById(@PathVariable("id") Long id) throws NotFoundException {
        listTodoService.deleteListTodo(id);
    }

}
