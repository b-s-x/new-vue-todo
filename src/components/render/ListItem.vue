<template>
    <div>
        <div class="item">
            
            <!-- <div class="checkbox">
                <input type="checkbox" id="checks">
                <label for="checks">
                    Выбери меня
                </label>
            </div> -->

            <span :class='{done: todo.completed}' class="input-area">
                <input type="checkbox" 
                    class="input-checkbox"
                    v-model="todo.completed"
                    id='checked'
                    @change='completed'>
                
                <label for='checked' class="label">
                    <div class="text-area">
                        <strong> {{index + 1}} </strong>
                        {{todo.title | uppercase}}
                    </div>
                </label>
            </span>

            <button class="remove" 
                @click='isVisible'> 
                    <icon-delete />
            </button>  

        </div>
    </div>
</template>

<script>

import IconDelete from '@/components/icons/IconDelete'
import { bus } from '../../main.js'

export default {

    props: ['todo', 'index'],

    components: {
        IconDelete,
    },

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

<style lang='scss' scoped>

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

    .input-checkbox {
        margin-top: 6px;
    }

    .input-area {
        display: flex;
    }

    .text-area {
        margin: 3px 5px;

    }

    .delete-icon {
        fill: black;
    }

    




.input-area {
    position:relative;
	padding-left:25px;
}

.input-area input[type=checkbox] {
	display:none;
}

.label::after {
	display:block;
	height:14px;
	width:14px;
	outline:1px solid #939598;
	position:absolute;
	top:0;
	left:0;
}

.label::before {
    content: '';
    color: transparent;
    position: absolute;
    width: 20px;
    height: 20px;
    padding-right: 1px;
    border-radius: 4px;
    transition: 0.2s;
    background: white;
    border: 2px solid black;
    overflow: hidden;
    left: 0;
    box-sizing: inherit;

}

.input-checkbox:checked + .label:before {
    content: url('./../../assets/IconCheck.svg');
    
    transition: 0.2s;
}



</style>
