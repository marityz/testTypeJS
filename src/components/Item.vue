<template>
    <div class = "item-position">
    <div class = 'item'>{{item.data}}</div>
    <span class="deltext" @click = 'emit("removeItem", item.index)' >✘</span>
    </div>
</template>

<script setup>
import {defineEmits, defineProps} from 'vue';

const item = defineProps({
    data: String,
    index: Number
})
const emit = defineEmits(['removeItem'])



</script>

<style scoped>
.deltext{
    font-size: 1.5em;

}
.deltext:hover{
    cursor: pointer;

}
.item{
    margin: 10px;
    font-size: 2em;
    height: 40px;
    width: 300px;
    text-align: center;

}
.item-position{
    padding: 0 10px;
    margin: 10px;
    display: flex;
    align-items: flex-start;
    border: #0e7373 solid 2px;


}
</style>