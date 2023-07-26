<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>



<template>
  <header class ="header">
      <nav>
        <RouterLink to="/" class='nav'>Home</RouterLink>
        <RouterLink to="/modal" class='nav'>Modal</RouterLink>
        <RouterLink to="/add" class='nav'>Add</RouterLink>
        <RouterLink to="/addA" class='nav'>AddOnlyA</RouterLink>
        <RouterLink to="/getMemes" class='nav'>GetMemes</RouterLink>
        <RouterLink to="/chart" class='nav'>Chart</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.header {
    width: 100%;
    font-size: 2em;
    background: #0dbbbb;


}
.nav{
    text-decoration: none;
    margin-right: 20px;
    color: #2c3e50;
}

</style>
