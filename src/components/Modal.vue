<template>
    <div class="modal-container"  :class={disabled:props.statusModal}>
        <div class="modal-body">
            <span class="modal-close" @click = 'emit("close")'>&#10008;</span>
            <div class="modal-action">

            </div>
        </div>
    </div>
</template>



<script setup lang="ts">
import {reactive, ref,defineProps, defineEmits} from 'vue';
const props = defineProps({
    statusModal: Boolean
})
const emit = defineEmits(['close']);
</script>

<style>
.modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #cececeb5;
}

.disabled{
    display: none;

}
.modal-body {
    background-color: rgb(165, 234, 234);
    border: 2px solid rgb(13, 187, 187);
    border-radius: 10px;
    text-align: center;
    padding: 10px 20px;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    min-height: 200px;
    max-height: max-content;
}


.modal-action {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
}

.modal-close {
    cursor: pointer;
    position: relative;
    align-self: end;
    right: -33px;
    top: -17px;
}

</style>