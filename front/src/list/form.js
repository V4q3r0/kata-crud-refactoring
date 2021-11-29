import React, { useContext, useState, useRef } from 'react';
import consumer from "./consumer";
import events from "./events";
import Store from "../store"

export default () => {
    const { dispatch } = useContext(Store);
    const formRef = useRef(null);
    const [state, setState] = useState({ name: "" });

    const onCreate = (event) => {
        event.preventDefault();
        if(state.name !== ""){
            consumer.save({ id: null, name: state.name })
            .then((response) => {
                if (response) {
                    response.json().then((newList) => {
                        dispatch(events.saved(newList));
                        formRef.current.reset();
                        setState({ name: "" })
                    })
                }
            })
            .catch((error) => console.error(error))
        }
    };

    return (
        <form ref={formRef}>
            <input
                type="text"
                name="name"
                placeholder="Lista de TO-DO"
                onChange={(event) => {
                    setState({ name: event.target.value })
                }}  ></input>
            <button onClick={onCreate}>Nueva lista</button>
        </form>
    );
};