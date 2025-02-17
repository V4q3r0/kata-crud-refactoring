const HOST_API = "http://localhost:8080/api/"
export default {
    findAll : async (listId) => {
        return fetch(HOST_API + listId + "/todos")
            .catch(error => console.error('Error:', error))

    },

    save : async (listId, request) => {
        return fetch(HOST_API + "todo", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(error => console.error('Error:', error))

    },

    update : async (listId, request) => {
        return fetch(HOST_API + listId+"/todo", {
            method: "PUT",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(error => console.error('Error:', error))

    },

    delete : async (id) => {
        return fetch(HOST_API + "todo/ " +id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(error => console.error('Error:', error))
    },
};