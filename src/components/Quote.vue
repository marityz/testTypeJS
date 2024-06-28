<script setup>
defineProps({
    mem: {
      type: Object,
      default: () => ({}),
    }
  }
)
</script>

<template>
  <div class="quote">
    <img
      :src="mem.url"
      class="quote__img"
    >

    <div class="quote__in">
      <div class="quote__title">{{ mem.title }}</div>

      <p class="quote__text">Author: {{ mem.author }}</p>
    </div>
  </div>
</template>

<style scoped>
.quote {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  height: 300px;
  width: 500px;
  padding: 10px;
  color: black;
  border: solid 4px rgb(60, 114, 114);
  background-color: #93b9b9;
  border-radius: 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px, rgb(14, 115, 115) 0 -2px 6px 0 inset;
}

.quote__in {
  display: flex;
  flex-direction: column;
}

.quote__img {
  width: 60%;
  max-height: 100%;
  margin-right: 10px;
}

.category {
  min-width: 100%;
  grid-column: 4/5;
  grid-row: 1/1;
  text-align: start;
  font-weight: bolder;
  padding: 10px;
  word-wrap: break-word;
}
</style>