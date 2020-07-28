<template>
    <div>
        <span :class='{done: todo.completed}'>
        <input type="checkbox" 
            @change='todo.completed = !todo.completed'>
            <strong> {{index + 1}} </strong>
            {{todo.title | uppercase}}
        </span>
        <button class="remove" 
                @click="$emit('remove', todo.id)"
            > &times; </button>
    </div>
</template>

<script>
export default {
    props: ['todo', 'index'],
    filters: {
        uppercase(value) {
            return value.toUpperCase()
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
    }

    .done {
        text-decoration: line-through;
    }
</style>