<script setup lang="ts">
import axios from 'axios';
import { reactive } from 'vue';

const state = reactive({
  getQuote: '',
});

const getInformation = async () => {
  try {
    const { data } = await axios.get('https://api.kanye.rest');

    state.getQuote = data.quote;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error);
    } else {
      console.log('An unexpected error occurred');
    }
  }
};

getInformation();
</script>

<template>
  <div class="request-field">
    <div class="quote">{{ state.getQuote }}</div>
  </div>

  <button
    @click="getInformation"
    class="button"
  >
    Get
  </button>
</template>

<style scoped>
.request-field {
  min-height: 50vh;
  max-height: max-content;
  width: 80%;
  margin: 30px auto;
  display: flex;
  padding: 20px;
  flex-direction: column;
  text-align: center;
  font-size: 3em;
  align-items: center;
  justify-content: center;
  border: #204141 solid 2px;
  background: #3d7575;
  border-radius: 17px;
  color: #fff;
}

.button {
  display: flex;
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #232626;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  height: 70px;
  transition: all 0.5s;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px, rgba(10, 37, 64, 0.35) 0 -2px 6px 0 inset;
}
</style>
