<script setup>
    defineProps({
        width:{type: String,required:true}, 
    })
</script>


<template>
    <div class="rf_proggress"><span :style="`width: ${width}%`"></span></div>
</template>


<style scoped>
.rf_proggress {
    display: block;
    width: 100%;
    height: 7px;
    position: relative;
    border-radius: 50px;
    overflow: hidden;
    background: #D9D9D9;
    margin: 10px 0 12px 0;
}

.rf_proggress span {
    position: absolute;
    height: 100%;
    border-radius: 50px;
    top: 0;
    left: 0;
    background: var(--443, linear-gradient(180deg, #F8B361 0%, #F0C736 100%));
}
</style>