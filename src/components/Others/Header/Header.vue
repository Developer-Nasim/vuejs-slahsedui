<script setup>
    import { onMounted,ref } from 'vue';
    import Nav from './Nav.vue';
    import logo from '../../../assets/img/logo.png' 
    let ShowMenu = ref(false)

    onMounted(()=>{
        const header = document.querySelector('.fixedable-header')
        if (header) { 
            window.addEventListener('scroll', () => {
                if (header.clientHeight < window.scrollY) {
                    header.classList.add('fixed_header')
                }else{
                    header.classList.remove('fixed_header')
                }
            })
        }
    })

</script>

<template>
    <header class="fixedable-header">
        <div class="container">
            <div class="row"> 
                <div class="col-lg-12">
                    <div class="header-wrp d-flex align-items-center justify-content-between">
                        <router-link to="/" class="logo"><img :src="logo" alt=""></router-link>
                        <div class="menu btn1 d-block d-lg-none" @click="ShowMenu = !ShowMenu">
                            <div class="icon-left"></div>
                            <div class="icon-right"></div>
                        </div>
                        <Nav class="d-none d-lg-flex"/>
                    </div>
                </div>
            </div>
        </div>
    </header>


    <div class="mobilemenu" :class="{open:ShowMenu}">
        <div class="overlay" @click="ShowMenu = !ShowMenu"></div>
        <div class="mmenus"> 
            <router-link to="/" class="logo"><img :src="logo" alt=""></router-link> 
            <div class="menu btn1 open" @click="ShowMenu = !ShowMenu">
                <div class="icon-left"></div>
                <div class="icon-right"></div>
            </div>
            <Nav/>
        </div>
    </div>

</template>

<style scoped>
header{
    padding: 30px 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    transition: .4s;
}
header.fixedable-header.fixed_header {
    position: fixed;
    padding: 15px 0;
    backdrop-filter: blur(5px);
    background-color: #ffffffb4;
}




.btn1 {
  position: relative;
  width: 50px;
height: 30px;
  transition-duration: 0.5s;
}
.btn1 .icon-left {
    transition-duration: 0.5s;
    position: absolute;
    height: 4px;
    width: 50%;
    border-radius: 10px;
    top: 13px;
    background-color: #212121;
    left: 0px;
}
.btn1 .icon-left:before {
  transition-duration: 0.5s;
  position: absolute;
    width: 100%;
  height: 4px;
  background-color: #212121;
  content: "";
  top: -10px;
    border-radius: 10px;
}
.btn1 .icon-left:after {
  transition-duration: 0.5s;
  position: absolute;
    width: 100%;
  height: 4px;
  background-color: #212121;
  content: "";
  top: 10px;
    border-radius: 10px;
}
.btn1 .icon-left:hover {
  cursor: pointer;
}
.btn1 .icon-right {
  transition-duration: 0.5s;
  position: absolute;
    height: 4px;
    width: 50%;
    border-radius: 10px;
  top: 13px;
  background-color: #212121;
  right: 2px;
}
.btn1 .icon-right:before {
  transition-duration: 0.5s;
  position: absolute;
    height: 4px;
    width: 100%;
    border-radius: 10px;
  background-color: #212121;
  content: "";
  top: -10px;
}
.btn1 .icon-right:after {
  transition-duration: 0.5s;
  position: absolute;
    height: 4px;
    width: 100%;
    border-radius: 10px;
  background-color: #212121;
  content: "";
  top: 10px;
}
.btn1.open .icon-left {
  transition-duration: 0.5s;
  background: transparent;
}
.btn1.open .icon-left:before {
  transform:rotateZ(45deg) translate(2px, 3px)
}
.btn1.open .icon-left:after {
  transform: rotateZ(-45deg) translate(3px, -5px)
}
.btn1.open .icon-right {
  transition-duration: 0.5s;
  background: transparent;
}
.btn1.open .icon-right:before {
  transform: rotateZ(-45deg)  translate(-12px, -7px)
}
.btn1.open .icon-right:after {
  transform: rotateZ(45deg) translate(-14px, 5px)
}
.btn1:hover {
  cursor: pointer;
}











</style>