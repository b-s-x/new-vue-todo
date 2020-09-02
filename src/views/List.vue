<template>
    <div> 
        <list-transition>
            <ListModalFrame class="modal_frame"
                v-show="isVisible"> 
                    Are you sure? 
            </ListModalFrame>
        </list-transition>

        <ListAddItem class="add"/>

        <select v-model="filter" class="selectForm">
            <option value="all"> All </option>
            <option value="completed"> Completed </option>
            <option value="not-completed"> Not Completed </option>
        </select>

        <ListLoader class="loader" v-if="getLoading"/>

        <ListRender class="render"
            v-else-if="filterItem.length"
            :todos="filterItem"
        />

        <p v-else class="nothing"> Nothing... </p>  
        
    </div>
</template>

<script>
import ListRender from "@/components/render/ListRender"
import ListAddItem from "@/components/render/ListAddItem"
import ListLoader from "@/components/ui/ListLoader"
import ListModalFrame from "@/components/ui/ListModalFrame"
import ListTransition from "@/components/ui/ListTransition"

import { bus } from "../main.js"


const removeItem = function(id) {
    this.$store.commit("remove", id)
};
        
const addItem = function(dataPart) {
    this.$store.commit("add", dataPart)
};

const closeModal = function() {
    this.isVisible = false;
};


export default {
    data() {
        return {
            filter: "all",
            isVisible: false,
            id: "",
        }
    },

    components: {
        ListRender,
        ListAddItem,
        ListLoader,
        ListModalFrame,
        ListTransition,
    },

    methods: {
        removeItem,
        addItem,
        closeModal
    },

    computed: {
        filterItem() {
            if(this.filter == "all") {
                return this.allTodos
            }   
            if(this.filter == "completed") {
                return this.allTodos.filter((elem) => elem.completed)
            }
            if(this.filter == "not-completed") {
                return this.allTodos.filter((elem) => !elem.completed)
            }
        },

        allTodos() {
            return this.$store.getters.allTodos
        },

        getLoading() {
            return this.$store.getters.getLoading
        },
    },

    mounted() {
        this.$store.dispatch("fetchTodos");
    },

    created() {
        bus.$on("addItem", (dataPart) => {
            this.addItem(dataPart)
        })

        bus.$on("accept", () => {
            this.removeItem(this.id);
            this.closeModal()
        })

        bus.$on("decline", () => {
            this.closeModal()
        })
        
        bus.$on("isVisible", (id) => {
            this.id = id
            this.isVisible = true;
        })
    },
    
    beforeDestroy() {
        bus.$off("addItem");
        bus.$off("accept");
        bus.$off("decline");
        bus.$off("isVisible");
    },
}

</script>

<style lang="scss" scoped>

    @import "@/styles/style/list.style.scss";
    
</style>
