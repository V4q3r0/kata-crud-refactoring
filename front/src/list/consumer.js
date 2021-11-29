const HOST_API = "http://localhost:8080/api/"
export default {
    findAll: async () => {
        return fetch(HOST_API + "listTodos")
            .catch(error => console.error('Error:', error))
    },

    save: async (request) => {
        return fetch(HOST_API + "listTodo", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        .catch(error => console.error('Error:', error))
    },
    delete: async (listId) => {
        return fetch(HOST_API + "listTodo/" + listId, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(error => console.error('Error:', error));
    }
};