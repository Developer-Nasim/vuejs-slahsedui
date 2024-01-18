<script setup> 
    defineProps({
        link:{type: String, required:false}, 
    })
</script>
<template>
    <a :href="link" class="social-item">
        <slot></slot>
    </a>
</template>

<style scoped>
 .social-item {
    display: flex;
    width: 37px;
    height: 37px;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.30);
    align-items: center;
    justify-content: center;
    transition: .3s;
}

.social-item:hover {
    border-color: #fff;
    background: #fff;
}
</style>