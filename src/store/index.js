import Vue from 'vue'
import Vuex from 'vuex'
import todosStore from './modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        todosStore,
    }
})