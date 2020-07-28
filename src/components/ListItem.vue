<template>
    <div>
        <span :class='{done: todo.completed}'>
        <input type="checkbox" class="check"
            @change='todo.completed = !todo.completed'>
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