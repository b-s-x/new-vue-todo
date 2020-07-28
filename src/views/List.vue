<template>
    <div> 
        <AddItem
        @addItem='addItem'
        />

        <select v-model="filter" class="selectForm">
            <option value='all'> All </option>
            <option value='completed'> Completed </option>
            <option value='not-completed'> Not Completed </option>
        </select>

        <Loader class='loader' v-if="loading"/>

        <ListRender
        v-else-if="filterItem.length"
        :todos='filterItem'
        @removeItem='removeItem'
        />

        <p v-else class="nothing"> Nothing... </p>
        
    </div>
</template>

<script>
import ListRender from '@/components/ListRender'
import AddItem from '@/components/AddItem'
import Loader from '@/components/Loader'


export default {
     data() {
        return {
            todos: [
                // {id: 1, title: 'bsx', completed: false},
                // {id: 2, title: 'xsb', completed: false},
                // {id: 3, title: 'sxb', completed: false},
            ],
            loading: true,
            filter: 'all'
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                this.todos = json
                this.loading = false
                }, 1000)
               
            })
    },
    components: {
        ListRender,
        AddItem,
        Loader,
    },
    methods: {
        removeItem(id) {
            this.todos = this.todos.filter((elem) => elem.id !== id)
        },
        
        addItem(dataPart) {
            this.todos.push(dataPart)
        }
    },
    computed: {
        filterItem() {
            if(this.filter == 'all') {
                return this.todos
            }   
            if(this.filter == 'completed') {
                return this.todos.filter((elem) => elem.completed)
            }
            if(this.filter == 'not-completed') {
                return this.todos.filter((elem) => !elem.completed)

            }
        }
    }
}
</script>

<style scoped>

    div {
        margin: 10px 80px 0 80px;
        display: flex; 
        flex-direction: column;
    }

    .nothing {
        font-size: 45px;
        margin: auto;
        margin-top: 40px;
    }

    .loader {
        display: flex;
        margin: auto;
        margin-top: 60px;
    }

    .selectForm {
        width: 120px;
        margin: auto;
        margin-top: 20px;
        border-radius: 15px;
        border: 1px solid black;
        background: rgb(253, 253, 253);
        outline:none;
    
    }
</style>