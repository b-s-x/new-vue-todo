<template>
    <div>
        <div class="item">

            <span :class="{done: todo.completed}" class="input-area">
                <input type="checkbox"
                    class="input-checkbox"
                    v-model="todo.completed"
                    :id="todoId"
                    @change="completed"
                >

                <label :for="todoId" class="label"
                @change="completed"
                >
                    <div class="text-area">
                        <strong> {{index + 1}}. </strong>
                        {{todo.title | uppercase}}
                    </div>
                </label>
            </span>

            <button class="remove"
                @click="isVisible">
                    <icon-delete />
            </button>

        </div>
    </div>
</template>

<script>

import IconDelete from "@/components/icons/IconDelete"
import { bus } from "../../main.js"

export default {

    props: ["todo", "index"],

    components: {
        IconDelete,
    },

    computed: {
        todoId() {
            return this.todo.id
        }
    },

    filters: {
        uppercase(value) {
            return value.toUpperCase()
        }
    },

    methods: {
        remove() {
            bus.$emit("remove", this.todo.id)
        },

        completed() {
            this.$store.commit("saveData")
        },

        isVisible() {
            bus.$emit("isVisible", this.todo.id)
        }
    }
}
</script>

<style lang="scss" scoped>

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

    .label {
        margin-left: 7px;
    }

    .text-area > strong {
        margin-right: 7px;
    }



    .input-area {
        position:relative;
        padding-left: 23px;
    }

    .input-checkbox {
        position: relative;
        z-index: -1;
        opacity: 0;
    }

    .label::before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid grey;
        left: 0;
        top: 2px;
    }

    .input-checkbox:checked + .label::before {
        content: url("./../../assets/IconCheck.svg");
        border: none;
    }

    .input-checkbox:not(:disabled):not(:checked) + .label:hover::before {
        border-color: black;
    }

    .input-checkbox:not(:disabled):active + label::before {
        background-color:black;
        border-color: black;
    }

    .input-checkbox:focus + label::before {
      box-shadow: 0 0 0 0.2rem rgba(105, 106, 107, 0.25);
    }

</style>
