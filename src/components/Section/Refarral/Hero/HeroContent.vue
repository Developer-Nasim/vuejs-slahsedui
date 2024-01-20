<script setup>
import StoreButton from '../../../Others/StoreButton.vue';
import UsersExample from '../../../Others/UsersExample.vue';
import GPlay from '../../../../assets/img/storeicons/gplay.png'
import AppStore from '../../../../assets/img/storeicons/appstore.png'


</script>
<template>
    <div class="hero-wrp">
        <h1>Invite and Earn Exciting Rewards</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and setting indus orem Ipsum has been the industrys.</p>

        <div class="hero-btns">
            <StoreButton :img="GPlay" href="#"/>
            <StoreButton :img="AppStore" href="#"/>
        </div> 
    </div>
</template>
<style scoped> 

.hero-wrp h1 {
    color: var(--dark); 
    font-size: 55px; 
    line-height: 66px; 
    letter-spacing: -1.5px;
    margin-bottom: 15px;
}

.hero-btns a.storeBtn {
    margin-top: 15px;
    margin-right: 21px;
}
.hero-btns {
    display: flex;
    flex-wrap: wrap;
}
.hero-btns > a:hover {
    background: var(--Gradient-2, #6199F8);
}
</style>