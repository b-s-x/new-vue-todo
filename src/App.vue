<template>
  <div id="app">
    <span class="linkDecor"> 
      <router-link to="/home" class="linkHome"> Home</router-link>
      <router-link to="/list" class="linkList"> List</router-link>
    </span>

    <router-view> </router-view>
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
  .linkDecor {
    font-size: 32px;
    margin: 10px;
    padding: 10px;
    display: flex;
    
  }

  .linkList, .linkHome {
    padding: 20px;
    margin: auto;
    color: black
  }

  @media screen and (max-width: 650px) {
    .linkDecor {
      margin-left: 135px;

      display: inline;
      }

      .linkList, .linkHome {
      padding: 20px;
      margin: 20px;
    }
  } 
</style>

