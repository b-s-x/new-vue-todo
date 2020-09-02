<template>
    <form @submit.prevent="onSubmit">
        <input class="inputArea"
            v-model="title"
        >
    </form>
</template>

<script>

import { bus } from "../../main.js"

export default {
   data() {
       return {
           title: "",
       }
   },
   methods: {
       onSubmit() {
           if(this.title.trim()) {
               const newItem = {
                   id: Date.now(),
                   title: this.title,
                   completed: false,
               }

               bus.$emit("addItem", newItem);
               this.title = ""
           }
       }
   }
}
</script>

<style scoped>
    .inputArea {
        border: black 1px solid;
        display: flex;
        margin: auto;
        width: 350px;
        padding: 7px;
        border-radius: 15px;
        outline: none;
    }

</style>
