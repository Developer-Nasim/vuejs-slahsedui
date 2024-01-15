<script setup>
import Button from '../Button.vue';
import MenuItem from './MenuItem.vue';
</script>
<template>
    <nav class="d-flex align-items-center justify-content-between">
        <ul class="d-flex align-items-center justify-content-between">
            <MenuItem href="#" txt="Home" />
            <MenuItem href="#" txt="Features" />
            <MenuItem href="#" txt="How it works" />
            <MenuItem href="#" txt="Pages" />
            <MenuItem href="#" txt="Pricing" /> 
            <MenuItem href="#" txt="Blog" /> 
            <MenuItem href="#" txt="Contact" /> 
        </ul>
        <Button href="#" txt="GET STARTED"/>
    </nav>
</template>

<style scoped> 
    nav ul{
        margin-right: 30px;
    }
</style>