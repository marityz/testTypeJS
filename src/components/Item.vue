<script setup>
const props = defineProps({
  data: String,
  index: Number
})
const emit = defineEmits(['removeItem'])
</script>

<template>
  <div class="item-position">
    <div class="item">{{ props.data }}</div>
    <span
      class="text-delete"
      @click="emit('removeItem', props.index)"
    >
    ✘
    </span>
  </div>
</template>

<style scoped>
.text-delete {
  font-size: 1.5em;
}

.text-delete:hover {
  cursor: pointer;
}

.item {
  margin: 10px;
  font-size: 2em;
  height: 40px;
  width: 300px;
  text-align: center;
}

.item-position {
  padding: 0 10px;
  margin: 10px;
  display: flex;
  align-items: flex-start;
  border: #0e7373 solid 2px;
}
</style>