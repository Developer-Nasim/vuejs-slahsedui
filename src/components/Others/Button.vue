<script setup>
    defineProps({
        txt:{type: String,required:true},
        href:{type: String,required:false},
        btype:{type: Boolean,required:false},
    })
</script>
<template>
    <button v-if="btype" :type="btype" class="themeBtn">{{txt}}</button>
    <a v-else :href="href" class="themeBtn">{{txt}}</a>
</template>
<style scoped>
    .themeBtn{
        text-transform: uppercase;
        font-weight: 500;
        display: inline-block;
        padding: 9px 40px;
        color: var(--white);
        border-radius: 25px;
        background: var(--gradientBg2);
    }
</style>