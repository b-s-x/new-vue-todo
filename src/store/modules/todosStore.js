
const updateTodos = (state, todos) => {
    state.todos = todos;
};

const remove = (state, id) => {
    state.todos = state.todos.filter((elem) => elem.id !== id)
    saveData(state)
};

const saveData = (state) => {
    localStorage.setItem("todos", JSON.stringify(state.todos))
};

const add = (state, dataPart) => {
    state.todos.push(dataPart)
    saveData(state)
};

const changeLoading = (state) => {
    state.loading = false
};

export default {
    actions: {
        fetchTodos({commit}) {
            if(localStorage.getItem("todos")) {
                setTimeout(() => {
                const todos = JSON.parse(localStorage.getItem("todos"))
                commit("changeLoading")
                commit("updateTodos", todos)
                }, 1000)
            }
        }
    },
    mutations: {
        updateTodos,
        add,
        remove,
        saveData,
        changeLoading,
    },
    state: {
        todos: [],
        loading: true,
    },
    getters: {
        allTodos: (state) => {
            return state.todos
        },
        getLoading: (state) => {
            return state.loading
        },
    },
}
