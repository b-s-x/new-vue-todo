<template>
    <div>
        <div class="item">
            
            <span :class='{done: todo.completed}' class="span">
                <input type="checkbox" class="check" v-model="todo.completed"
                @change='completed'>
                
                <div class="text-area">
                    <strong> {{index + 1}} </strong>
                    {{todo.title | uppercase}}
                </div>
            </span>

            <button class="remove" 
                @click='isVisible'> 
                    <img class='delete-icon' src='@/assets/icons/delete.svg'>
            </button>  

        </div>
    </div>
</template>

<script>

import { bus } from '../../main.js'

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
        },
        isVisible() {
            bus.$emit('isVisible', this.todo.id)
        }
    }
}
</script>

<style scoped>

    .remove {
        background: white;
        border: none;
        outline: none;
    }

    .done {
        text-decoration: line-through;
    }

    .item {
        display: flex;
        justify-content: space-between;
        margin-top: 2px;
    }

    .check {
        margin-top: 6px;
    }

    .span {
        display: flex;
    }

    .text-area {
        margin: 3px 5px;

    }

</style>
