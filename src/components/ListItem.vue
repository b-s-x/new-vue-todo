<template>
    <div>
        <span :class='{done: todo.completed}'>
        <input type="checkbox" class="check" v-model="todo.completed"
            @change='completed'>
            <strong> {{index + 1}} </strong>
            {{todo.title | uppercase}}
        </span>
        <button class="remove" 
                @click="remove"
            > &times; 
        </button>  
    </div>
</template>

<script>

import { bus } from '../main'

export default {
    props: ['todo', 'index'],
    filters: {
        uppercase(value) {
            return value.toUpperCase()
        }
    },
    methods: {
        remove() {
            bus.$emit('remove', this.todo.id)
        },
        completed() {
            this.$store.commit('saveData')
        }
    }
}
</script>

<style scoped>

    .remove {
        color: white;
        background: black;
        border: none;
        border-radius: 50%;
        outline: none;
    }

    .done {
        text-decoration: line-through;
    }
    
</style>