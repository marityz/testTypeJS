<template>
    <div class="quote-position">
        <div class="quote">
            {{props.mem.title}}
        </div>
        <img class="img" :src='props.mem.url' >
        <p class="category">Author: {{props.mem.author}}</p>
    </div>

</template>

<script setup>

import {defineProps} from "vue";
const props = defineProps(['mem']

)

</script>

<style scoped>

.quote-position{
    display: grid;
    grid-column: 1/5;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 5px;
    min-height: 200px;
    max-height: 300px;

}

.quote {
    text-align: start;
    padding: 10px;
    min-width: 100%;
    grid-column: 3  /5;
    grid-row: 2/4;

}

.img {
    text-align: end;
    grid-column: 1/3;
    grid-row: 1/4;
    font-size: 1.1em;
    font-weight: bold;
    width: 100%;
    height: 100%;

}

.category {
    min-width: 100%;
    grid-column: 4/5;
    grid-row: 1/1;
    text-align: start;
    font-weight: bolder;
    padding: 10px;
    /*hyphens: auto;*/
    word-wrap: break-word;
}
</style>