<script setup> 
    defineProps({
        content:{type: Object, required:true}, 
    })
</script>
<template>
    <a :href="content.link" class="social-item">
        <img :src="content.img" alt="">
    </a>
</template>

<style scoped>
 
</style>