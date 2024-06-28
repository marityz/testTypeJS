<script setup lang="ts">
import axios from 'axios';
import {reactive, ref} from 'vue';
import {switchTheme} from '@/components/GlobalState';
import quote from '@/components/Quote.vue';
import Loader from '@/components/Loader/Loader.vue';

const memeCount = ref(null);

const state = reactive({
  isLoading: false,
  data: [],
});

const getNumberQuotes = async (event: Event) => {
  event.preventDefault();

  try {
    state.isLoading = true;

    if (memeCount.value > 0) {
      const {data} = await axios.get(`https://meme-api.com/gimme/${memeCount.value}`);
      state.data = [];

      state.data = data.memes;
    }
  } catch (error) {
    state.data = 'Error! Could not reach the API. ' + error;
  } finally {
    state.isLoading = false;
  }
};
</script>

<template>
  <main v-bind:class="{ body_rose:switchTheme.state }">
    <div class="get-memes">
      <button
        class="switch"
        @click="switchTheme.changeTheme"
      >
        switch
      </button>

      <form
        class="form"
        @submit="getNumberQuotes"
      >
        <span class="label-input">The number of memes: </span>

        <input
          v-model="memeCount"
          type="number"
          class="input-form"
        >
        <button
          type="submit"
          class="form-button"
        >
          Get
        </button>
      </form>

      <loader v-if="state.isLoading"/>

      <div
        v-else
        class="quotes-container"
      >
        <div
          v-for="(mem, index) in state.data"
          :key="index"
        >
          <quote :mem="mem"/>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.get-memes {
  position: relative;
  width: 100%;
  height: max-content;
}

.form {
  display: flex;
  flex-direction: column;
  color: black;
}

.input-form {
  min-width: 200px;
  max-width: max-content;
  height: 70px;
  margin: auto;
  appearance: none;
  background-color: #dfeaea;
  border: 2px solid #424141;
  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px, rgba(10, 37, 64, 0.35) 0 -2px 6px 0 inset;
}

.label-input {
  display: flex;
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
}

.form-button {
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

.quotes-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px;
  margin-left: auto;
}
</style>