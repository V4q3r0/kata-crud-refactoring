package co.com.sofka.crud.listTodo;

import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ListTodoService {

    @Autowired
    ListTodoRepository listTodoRepository;

    //Servicios de listTodo
    public ListTodo addListTodo(ListTodo listTodo) throws Exception {
        if(listTodo.getName().isEmpty() || listTodo.getName().length() < 8){
            throw new Exception("El nombre debe tener al menos 8 caracteres");
        }
        return listTodoRepository.save(listTodo);
    }

    public ArrayList<ListTodo> getAllListTodo(){
        return (ArrayList<ListTodo>) listTodoRepository.findAll();
    }

    public void deleteListTodo(Long id) throws NotFoundException {
        var listTodo = listTodoRepository.findById(id)
                .orElseThrow(()-> new NotFoundException("No se encontro la id."));
        listTodoRepository.deleteById(id);
    }


}
