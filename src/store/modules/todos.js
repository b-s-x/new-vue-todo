export default {
    actions: {
        fetchTodos() {
            if(localStorage.getItem('todos')) {
                setTimeout(() => {
                todos = JSON.parse(localStorage.getItem('todos'))
                // this.loading = false
                }, 1000)     
            }
        }
    },
    mutations: {
        updateTodos(state, todos) {
            state.todos = todos
        }
    },
    state: {
        todos: [],
    },
    getters: {
        allTodos(state) {
            return state.todos
        }
    },
}