<script setup>
   
import StoreButton from '../../../Others/StoreButton.vue';
defineProps({
    contents:{type:Object, required: true}
})


</script>
<template>
    <div class="download-contents">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="dc-wrp">
                    <h1>{{contents.heading}}</h1>
                    <p>{{contents.content}}</p>
                    <div class="app-stores">
                        <StoreButton v-for="(img,i) in contents.imgs.stores" :key="i" :img="img.img" :href="img.link"/> 
                    </div>
                </div>
            </div>
            <div class="col-lg-5">
                <img :src="contents.imgs.demo" class="demoImg" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped> 

.download-contents {
    position: relative;
    z-index: 2;
    color: #fff;
}

.download-contents:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 70%;
    border-radius: 30px;
    background: var(--MAIN-Gradient, linear-gradient(290deg, #FE5D5D -1.16%, #FF854B 100%));
    top: 50%;
    left: 0;
    z-index: -1;
    transform: translateY(-50%);
}

.download-contents .dc-wrp {
    margin: 20px 0px;
    max-width: 630px;
    margin-left: 90px;
}

.download-contents .dc-wrp h1 {
    color: #fff;
    margin-bottom: 25px;
}
 

.download-contents > div > div > img {
    display: block;
    margin-left: auto;
    margin-right: 8%;
}
.app-stores {
    display: flex;
    margin-top: 35px;
}

.app-stores > a {
    margin-right: 20px;
    border: none !IMPORTANT;
    max-width: 190px;
    transition: .3s;
}

.app-stores > a:hover {
    box-shadow: 0px 3px 10px -2px #fff6f6;
}
</style>