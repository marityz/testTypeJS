<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

const getQuote = ref('')
type Quote = {
  quote: String,
};
type getQuoteResponse = {
  data: Quote[];
};
async function getInformation() {
  try {
    const { data, status } = await axios.get<getQuoteResponse>(
      'https://api.kanye.rest'
    );

    JSON.stringify(data, null, 4);

    getQuote.value = data.quote;

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return 'An unexpected error occurred';
    }
  }
}

getInformation();
</script>

<template>
  <div class="request-field">
    <div class="quote">{{ getQuote }}</div>
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
  border: #2c3e50 solid 2px;
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
  background: #3acbcb;
  border-radius: 17px;
}

.button {
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
}
</style>
