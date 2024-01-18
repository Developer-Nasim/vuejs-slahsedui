<script setup> 
    defineProps({
        content:{type: Object, required:true}, 
    })
</script>
<template>
    <div class="single-blog">
        <img :src="content.img" alt="">
        <div>
            <h5>{{content.heading}}</h5>
            <p>{{content.content}}</p>
            <a :href="content.link">READ MORE</a>
        </div>
    </div>
</template>

<style scoped>
 
</style>