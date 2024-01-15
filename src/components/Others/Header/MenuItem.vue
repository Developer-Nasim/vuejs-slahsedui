<script setup>
    defineProps({
        href:{
            type: String,
            required: true
        },
        txt:{
            type: String,
            required: true
        }
    })

</script>

<template>
    <li><a :href="href">{{ txt }}</a></li>
</template>
<style scoped>
    nav ul li a{
        margin-left: 40px;
        font-weight: 500;
        color: var(--dark);
        display: block;
    } 
    nav ul li:hover a{
        color: var(--themeBg);
        /* background: var(--gradientBg);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; */
    }
</style>