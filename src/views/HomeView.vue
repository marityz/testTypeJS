<script setup lang="ts">
import { switchTheme } from '@/components/GlobalState';
import RequestField from '@/components/RequestField.vue';
</script>

<template>
  <main v-bind:class="{ body_rose: switchTheme.state }">
      <button
        class="switch"
        @click = 'switchTheme.changeTheme'
      >
        switch
      </button>
      <RequestField />
  </main>
</template>

<style>
.body_rose {
    background: deeppink;
    min-height: 100vh;
}
</style>
