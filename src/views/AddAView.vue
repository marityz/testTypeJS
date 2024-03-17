<script setup>
import {computed, ref} from 'vue';
import {switchTheme} from '@/components/GlobalState';
import CustomInput from '@/components/CustomInput.vue';

const searchText = ref('');

const res = computed(() => searchText.value.replace(/[a-zа-яё\/,./]/gi, 'A'));
</script>

<template>
  <main :class="{ body_rose: switchTheme.state }">
    <button
      class="switch"
      @click="switchTheme.changeTheme"
    >
      switch
    </button>
    <div class="input-position">
      <CustomInput v-model:inputCustom="searchText"/>
      <p class="result">{{ res }}</p>
    </div>
  </main>
</template>

<style scoped>
.result {
  margin: 20px auto;
  min-height: 30px;
  max-height: max-content;
  border: #0e7373 solid 2px;
  border-radius: 5px;
  min-width: 200px;
  max-width: 500px;
  background: #d8fafa;
}

.input-position {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

}
</style>