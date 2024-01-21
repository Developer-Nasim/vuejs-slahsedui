<script setup>
   
import StoreButton from '../../../Others/StoreButton.vue';
    import Anim from '../../../Others/Anim.vue'
defineProps({
    contents:{type:Object, required: true}
})


</script>
<template>
    <div class="download-contents">
        
        <!-- Animation -->
        <Anim white=""/>

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
.download-contents .anim_line {
    width: 90%; 
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%); 
}
.download-contents:after,.download-contents .anim_line {
    height: 70%;
}
.download-contents:after {
    content: "";
    position: absolute;
    width: 100%;
    border-radius: 30px;
    background: var(--MAIN-Gradient, linear-gradient(290deg, #FE5D5D -1.16%, #FF854B 100%));
    top: 50%;
    left: 0;
    z-index: -2;
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

/* Tablet screen :768px. */
@media (min-width: 768px) and (max-width: 991px) {
    .download-contents > div > div > img{
        margin: auto;
        max-height: 400px;
    }
    .download-contents:after{
        top: 0;
        transform: translateY(0);
        height: 80%;
    }
.download-contents .dc-wrp[data-v-2c564ad4] {
    margin: 50px;
    max-width: 100%; 
}




}

 
/* small screen :320px. */
@media (max-width: 767px) {
    .download-contents > div > div > img{
        margin: auto;
        max-height: 400px;
        max-width: 80%;
    }
    .download-contents:after{
        top: auto;
    bottom: 0;
    transform: translateY(0);
    height: 90%;
    }
.download-contents .dc-wrp {
    margin: 30px;
    max-width: 100%; 
    text-align: center;
}
.download-contents .row {
    flex-direction: column-reverse;
}
.app-stores {
    flex-wrap: wrap; 
    margin-top: 25px;
    justify-content: center;
}
.app-stores > a{
    margin-bottom: 10px;
}




}
  



</style>