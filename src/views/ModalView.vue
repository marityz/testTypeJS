<script setup lang="ts">
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
import { switchTheme } from "@/components/GlobalState";

const statusModal = ref(true)

function isShowModal() {
  statusModal.value = false;
}

function close() {
  return statusModal.value = true;
}
</script>

<template>
  <main :class="{ body_rose: switchTheme.state }">
    <button
      class="switch"
      @click="switchTheme.changeTheme"
    >
      switch
    </button>

    <div class="page-modal">
      <button
        @click="isShowModal"
        class="button-show"
      >
        Open
      </button>
    </div>
    <Modal
      :statusModal="statusModal"
      @close="close()"
    />
  </main>
</template>

<style>
.body-rose {
  background: deeppink;
}

.button-show {
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

.page-modal {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>