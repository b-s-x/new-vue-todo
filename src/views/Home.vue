<template>
    <div class="common"> 
        <h1>  
           <router-link class="home" to='/'> I am at Home! </router-link>
        </h1>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .common {
        display: flex;
    }

    h1 { 
        font-size: 70px;
        margin: auto;
        margin-top: 100px;
    }

    .home {
        color: black;
        text-decoration: none;
    }
    
</style>