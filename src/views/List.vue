<template>
    <div> 
        <ListAddItem class='add'/>

        <select v-model="filter" class="selectForm">
            <option value='all'> All </option>
            <option value='completed'> Completed </option>
            <option value='not-completed'> Not Completed </option>
        </select>

        <ListLoader class='loader' v-if="getLoading"/>

        <ListRender
        v-else-if="filterItem.length"
        :todos='filterItem'
        />

        <p v-else class="nothing"> Nothing... </p>  
        
    </div>
</template>

<script>
import ListRender from '@/components/ListRender'
import ListAddItem from '@/components/ListAddItem'
import ListLoader from '@/components/ListLoader'
import { bus } from '../main'

export default {
    data() {
        return {
        filter: 'all',
        }
    },

    components: {
        ListRender,
        ListAddItem,
        ListLoader,
    },

    methods: {
        removeItem(id) {
            this.$store.commit('remove', id)
        },
        
        addItem(dataPart) {
            this.$store.commit('add', dataPart)
        }, 
    },

    computed: {
        filterItem() {
            if(this.filter == 'all') {
                return this.allTodos
            }   
            if(this.filter == 'completed') {
                return this.allTodos.filter((elem) => elem.completed)
            }
            if(this.filter == 'not-completed') {
                return this.allTodos.filter((elem) => !elem.completed)
            }
        },
        allTodos() {
            return this.$store.getters.allTodos
        },
        getLoading() {
            return this.$store.getters.getLoading
        }
    },

    mounted() {
      this.$store.dispatch('fetchTodos')
    },

    created() {
        bus.$on('remove', (id) => {
            this.removeItem(id)
        }),
        bus.$on('addItem', (dataPart) => {
            this.addItem(dataPart)
        })
    },
    
    beforeDestroy() {
        bus.$off('remove');
        bus.$off('addItem');
    },
}
</script>

<style scoped>

    div {
        margin: 10px 180px 0 180px;
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

    @media screen and (max-width: 1110px) {
    div {
        margin: 10px 140px 0 140px;
        }
    }
    @media screen and (max-width: 950px) {
        div {
            margin: 10px 120px 0 120px;
        }
    } 

    @media screen and (max-width: 870px) {
        div {
            margin: 10px 100px 0 100px;
            min-width: 400px;
        }
    }
    @media screen and (max-width: 800px) {
        div {
            margin: 10px 70px 0 70px;
            min-width: 400px;
        }
    }

    @media screen and (max-width: 690px) {
        div {
            margin: 10px 40px 0 40px;
            min-width: 400px;
        }
    }
    @media screen and (max-width: 550px) {
    div {
        margin: 10px 50px 0 20px;
        min-width: 400px;
    }

    .add {
        min-width: 400px;
        margin-left: 20px;
        margin-right: 30px;
    }

    .selectForm {
        margin-left: 165px;
    }
}
</style>