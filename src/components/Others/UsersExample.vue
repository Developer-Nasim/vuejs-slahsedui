<script setup>
import Users from '../../assets/img/users.png'
</script>
<template>
    <div class="hero-example-users">
        <img :src="Users" alt="">
        <span>12+ <br> used this app</span>
    </div>
</template>
<style scoped>

.hero-example-users {
    display: flex;
    align-items: center;
    margin-top: 35px;
}

.hero-example-users span {
    color: #454545;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    margin-left: 10px;
} 
</style>