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
    <li><router-link :to="href">{{ txt }}</router-link></li>
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
    }
    /* Normal screen :992px. */
@media (min-width: 992px) and (max-width: 1200px) {
    nav ul li a {
        margin-left: 25px; 
    }

}
</style>