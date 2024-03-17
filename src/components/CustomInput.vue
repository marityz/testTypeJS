<script setup>
import {computed, defineEmits, defineProps} from 'vue';

const props = defineProps(['inputCustom'])
const emit = defineEmits(['update:inputCustom'])

const value = computed({
  get() {
    return props.inputCustom;
  },
  set(value) {
    emit('update:inputCustom', value)

  }
});
</script>

<template>
  <input
    v-model="value"
    class="input__field"
  />
</template>

<style scoped>
.input__field {
  width: 50%;
  padding: 10px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
}
</style>