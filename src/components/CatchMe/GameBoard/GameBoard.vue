<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import type { CSSProperties } from 'vue';

const position = ref({ x: 0, y: 0 });
const gameBoard = ref<HTMLDivElement | null>(null);

const targetStyle = computed<CSSProperties>(() => ({
  top: `${position.value.y}px`,
  left: `${position.value.x}px`,
  position: 'absolute',
  transition: 'top 0.5s ease, left 0.5s ease',
}));

const getRandomPosition = (avoidX = 0, avoidY = 0) => {
  const board = gameBoard.value;
  if (!board) return { x: 0, y: 0 };
  const rect = board.getBoundingClientRect();

  let x, y;

  do {
    x = Math.random() * (rect.width - 50);
    y = Math.random() * (rect.height - 50);
  } while (Math.abs(x - avoidX) < 100 && Math.abs(y - avoidY) < 100);

  return { x, y };
};

const moveTarget = () => {
  position.value = getRandomPosition();
};

const avoidMouse = (event: MouseEvent) => {
  const board = gameBoard.value;

  if (!board) return;

  const rect = board.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  position.value = getRandomPosition(mouseX, mouseY);
};

const checkCatch = (event: MouseEvent) => {
  const targetElement = event.target  as HTMLElement;
  if (targetElement.classList.contains('target')) {
    moveTarget();
  }
};

onMounted(async () => {
  setInterval(moveTarget, 1000);
});
</script>

<template>
  <div
    ref="gameBoard"
    class="game-board"
    @mousemove="avoidMouse"
    @click="checkCatch"
  >
    <div
      class="target"
      :style="targetStyle"
    ></div>
  </div>
</template>

<style scoped>
.game-board {
  position: relative;
  height: 70vh;
  margin: 50px;
  padding: 30px;
  border: #204141 solid 6px;
  background: #3d7575;
  border-radius: 16px;
}

.target {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #ff6347;
  border-radius: 50%;
  transition: top 0.5s ease, left 0.5s ease;
}
</style>
