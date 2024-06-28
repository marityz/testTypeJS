<script setup lang="ts">
import obj from '@/Data.vue';
import {computed, ref} from 'vue';
import {switchTheme} from '@/components/GlobalState';
import Item from '@/components/Item.vue';

const text = ref();

const removeItem = (index) => obj.arr.splice(index, 1);
const AddArray = () => {
  obj.arr.push(text.value);
  text.value = '';
};
const deleteArray = () => obj.arr.pop();

const publishedArr = computed(() => obj.arr.length > 0 ? 'Yes' : 'No');
</script>

<template>
  <main v-bind:class="{body_rose:switchTheme.state}">
    <button class="switch" @click='switchTheme.changeTheme'>switch</button>

    <form ref="form" class="place">
      <h2>Do you have products on list -{{ publishedArr }}</h2>
      <input class='input-add' v-model="text" @keyup.enter="AddArray">

      <div class='container-item' v-if="publishedArr" v-for="(item, i) in obj.arr ">
        <Item
          :index="i"
          :data="item"
          @removeItem="removeItem"
        />
      </div>
      <!--      <button class="button-add" @click="AddArray">Add</button>-->
      <!--      <button class="button-add" @click="deleteArray">Delete</button>-->
    </form>
  </main>
</template>

<style scoped>
.body-rose {
  background: deeppink;
}

.container-item {
  height: max-content;
}

.input-add {
  margin-bottom: 1rem;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
}

.place {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: auto;
}

.button-add {
  display: inline-block;
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
  margin: 5px;
}
</style>