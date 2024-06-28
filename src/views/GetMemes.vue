<script setup>
import axios from 'axios';
import {reactive, ref, watch} from "vue";
import {switchTheme} from "@/components/GlobalState";
import Quote from "@/components/Quote.vue";

const numberMemes = ref(Number);
const memes = reactive({
    data: []
  }
);

const getNumberQuotes = watch(numberMemes, async (newNumberMemes) => {
  if (newNumberMemes > 0) {
    try {
      const { data } = await axios.get(`https://meme-api.com/gimme/${numberMemes.value}`)
      memes.data = data.memes;
    } catch (error) {
      memes.data = 'Error! Could not reach the API. ' + error;
    }
  }
});
</script>

<template>
  <main v-bind:class="{ body_rose:switchTheme.state }">
    <button
      class="switch"
      @click="switchTheme.changeTheme"
    >
      switch
    </button>
    <form
      class="form"
      @submit.prevent="formSubmit"
    >
      <span class="label-input">The number of memes: </span>
      <input
        v-model="numberMemes"
        type="number"
        class="input-form"
      >
      <input
        type="button"
        class="form-button"
        value="Get"
        @click="getNumberQuotes"
      >
    </form>
    <div class="quotes-container">
      <div
        v-for="(mem, index) in memes.data"
        :key="index"
        class="quote-container"
      >
        <Quote :mem="mem"/>
      </div>
    </div>
  </main>
</template>

<style scoped>
.quote-container {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: 1/3;
  min-height: 150px;
  background: #d8fafa;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.quote-container:nth-child(2n) {
  grid-column: 2/4;
}

.quotes-container {
  display: grid;
  grid-column: 1/4;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 20px;
  grid-gap: 20px;
}

.form {
  display: flex;
  flex-direction: column;
}

.input-form {
  min-width: 100px;
  max-width: max-content;
  height: 80px;
  margin: auto;
  appearance: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px, rgba(10, 37, 64, 0.35) 0 -2px 6px 0 inset;
}

.label-input {
  display: flex;
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  font-weight: bold;
}

.form-button {
  display: flex;
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #0e7373;
  border: none;
  color: #FFFFFF;
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