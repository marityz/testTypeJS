<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="header">
    <nav>
      <RouterLink to="/" class='nav'>Home</RouterLink>
      <RouterLink to="/modal" class='nav'>Modal</RouterLink>
      <RouterLink to="/add" class='nav'>Add</RouterLink>
      <RouterLink to="/addA" class='nav'>AddOnlyA</RouterLink>
      <RouterLink to="/getMemes" class='nav'>GetMemes</RouterLink>
      <RouterLink to="/chart" class='nav'>Chart</RouterLink>
      <RouterLink to="/catch-me-not" class='nav'>CatchMe</RouterLink>
    </nav>
  </header>

  <RouterView/>
</template>

<style scoped>
.header {
  width: 100%;
  background: #415959;
  padding: 8px 40px;
  border: 2px solid #224f4f;
}

.nav {
  margin-right: 30px;
  text-decoration: none;
  font-size: 18px;
  color: #fff;
}
</style>
