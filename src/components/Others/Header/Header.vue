<script setup>
    import Nav from './Nav.vue';
    import logo from '../../../assets//img/logo.png' 
</script>


<template>
    <header>
        <div class="container">
            <div class="row"> 
                <div class="col-lg-12">
                    <div class="header-wrp d-flex align-items-center justify-content-between">
                        <router-link to="/" class="logo"><img :src="logo" alt=""></router-link>
                        <Nav />
                    </div>
                </div>
            </div>
        </div>
    </header>

</template>

<style scoped>
header{
    padding: 30px 0;
}
</style>