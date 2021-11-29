import React, { useContext, useEffect, useState } from "react";
import consumer from './consumer';
import events from "./events";
import Store from "../store";

export default (listId) => {
    const { state: { list  }, dispatch } = useContext(Store);
    const [isLoaded, setLoaded] = useState(false);
    
    useEffect(() => {
        consumer.findAll(listId).then((response) => {
            if(response) {
                response.json().then((list) => {
                    dispatch(events.finded(list));
                });
            }
            setLoaded(true);
        })
    }, [listId, dispatch]);

    const onDelete = (listId) => {
        consumer.delete(listId).then((response) => {
            if(response) {
                dispatch(events.deleted(listId));
            }
        })
    };

    return (
        <div>
            {!isLoaded && <div>Loading...</div>}
            <table >
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Tarea</td>
                        <td>¿Completado?</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {list.elements.map((todo) => {
                        return <tr key={todo.id} id={"to-do-"+todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.name}</td>
                            <td><input type="checkbox" defaultChecked={todo.completed}></input></td>
                            <td><button onClick={() => onDelete(todo.id)}>Eliminar</button></td>
                            <td><button >Editar</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}