import React, { useState, useContext, useEffect } from 'react';
import ToDoForm from "../todo/form";
import ToDoList from "../todo/list";
import consumer from "./consumer";
import events from "./events";
import Store from "../store"

export default () => {
    const { state: { list  }, dispatch } = useContext(Store);
    const [isLoaded, setLoaded] = useState(false);
    
    useEffect(() => {
        consumer.findAll().then((response) => {
            if(response) {
                response.json().then((list) => {
                    dispatch(events.finded(list));
                });
            }
            setLoaded(true);
        })
    }, [dispatch]);

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
            {list.elements.length === 0 && <div>empty list!</div>}
            {list.elements.map((element) => {
                return <div key={element.id} id={"list-to-do-"+element.id}>
                    <fieldset>
                        <legend>
                            {element.name.toUpperCase()}
                            <button onClick={() => onDelete(element.id)}>Eliminar</button>
                        </legend>
                        <ToDoForm listId={element.id}/>
                        <ToDoList listId={element.id}/>
                    </fieldset>
                </div>
            })}
        </div>
    );
}