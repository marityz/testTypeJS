<script setup lang="ts">
</script>

<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
}

.loader::after,
.loader::before {
  content: '';
  width: 60px;
  height: 60px;
  border: 3px solid #0e7373;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  animation: rotation 2s ease-in-out infinite;
}

.loader::after {
  border-color: #0e7373;
  animation-delay: 1s;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>