<template>
      <main v-bind:class="{body_rose:switchTheme.state}">
          <button class="switch" @click = 'switchTheme.changeTheme'>switch</button>
          <div class = "input-position">
          <CustomInput v-model:inputCustom="searchText" ></CustomInput>
              <p class = "result">{{res}}</p>
          </div>
  </main>

</template>

<script setup>

import {switchTheme} from "@/components/GlobalState";
import CustomInput from "@/components/CustomInput.vue";
import {computed, reactive, ref} from "vue";
const searchText = ref('')
const res = computed({
    get(){
        return searchText.value.replace(/[a-zа-яё\/,./]/gi, 'A')
    }
    }

)



</script>

<style scoped>
.result{
    margin: 20px auto;
    min-height: 30px;
    max-height: max-content;
    border: #0e7373 solid 2px;
    border-radius: 5px;
    min-width: 200px;
    max-width: 500px;
    background: #d8fafa;
}
.input-position{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;

}

</style>