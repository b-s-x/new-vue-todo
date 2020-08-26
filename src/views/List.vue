<template>
    <div> 
        <list-transition>
            <ListModalFrame class="modal_frame"
                v-show="isVisible"> 
                    Are you sure? 
            </ListModalFrame>
        </list-transition>

        <ListAddItem class='add'/>

        <select v-model="filter" class="selectForm">
            <option value='all'> All </option>
            <option value='completed'> Completed </option>
            <option value='not-completed'> Not Completed </option>
        </select>

        <ListLoader class='loader' v-if="getLoading"/>

        <ListRender class="render"
            v-else-if="filterItem.length"
            :todos='filterItem'
        />

        <p v-else class="nothing"> Nothing... </p>  
        
    </div>
</template>

<script>
import ListRender from '@/components/render/ListRender'
import ListAddItem from '@/components/render/ListAddItem'
import ListLoader from '@/components/ui/ListLoader'
import ListModalFrame from '@/components/ui/ListModalFrame'
import ListTransition from '@/components/ui/ListTransition'

import { bus } from '../main.js'

export default {
    data() {
        return {
            filter: 'all',
            isVisible: false,
            id: '',
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
        removeItem(id) {
            this.$store.commit('remove', id)
        },
        
        addItem(dataPart) {
            this.$store.commit('add', dataPart)
        }, 

        closeModal() {
            this.isVisible = false;
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
        },
    },

    mounted() {
        this.$store.dispatch('fetchTodos');
    },

    created() {
        bus.$on('addItem', (dataPart) => {
            this.addItem(dataPart)
        })

        bus.$on('accept', () => {
            this.removeItem(this.id);
            this.closeModal()
        })

        bus.$on('decline', () => {
            this.closeModal()
        })
        
        bus.$on('isVisible', (id) => {
            this.id = id
            this.isVisible = true;
        })
    },
    
    beforeDestroy() {
        bus.$off('addItem');
        bus.$off('accept');
        bus.$off('decline');
        bus.$off('isVisible');
    },
}
</script>

<style lang='scss' scoped>

    div {
        margin: 0 180px 0 180px;
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

    .modal_frame {
        font-size: 20px;
        font-weight: bold; 
    }

    @media screen and (max-width: 1110px) {
        div {
            margin: 0 140px 0 140px;
        }
    }

    @media screen and (max-width: 950px) {
        div {
            margin: 0 120px 0 120px;
        }
    } 

    @media screen and (max-width: 870px) {
        div {
            margin: 0 100px 0 100px;
        }
    }

    @media screen and (max-width: 800px) {
        div {
            margin: 0 70px 0 70px;
        }
    }

    @media screen and (max-width: 690px) {
        div {
            margin: 0 40px 0 40px;
        }
    }

    @media screen and (max-width: 550px) {
        div {
            margin: 0 50px 0 50px;
        }

        .loader {
            margin: 60px 170px
        }

        .add {
            min-width: 400px;
            margin-left: 20px;
            margin-right: 30px;
        }

        .render {
            min-width: 340px;
        }

        .selectForm {
            margin-left: 165px;
        }
    }

</style>
