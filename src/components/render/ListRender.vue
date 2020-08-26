<template>
    <div> 
        <ListItem class="listItem"
            v-for='(todo, index) of todos' :key='todo.id'
            :todo='todo'
            :index='index'
        />
    </div>
</template>

<script>
import ListItem from '@/components/render/ListItem'

export default {
    props: ['todos'],
    components: {
        ListItem,
    },
}
</script>

<style scoped>
    .listItem {
        border: black 1px solid;
        border-radius: 15px;
        margin: 7px;
        padding: 10px;
        display: flex;
        justify-content: space-between
    }
</style>