<script setup> 
import {FadeLeft} from '../../../../Helpers/Animation';
import { onMounted, ref } from 'vue';

    import Ovarlay from '../../../../assets/img/ovarlay.png' 
    import Frame from '../../../../assets/img/icons/frame.png'
    
    import Interface from '../../../../assets/img/interface/section.png'
    import Interface2 from '../../../../assets/img/interface/profile.png'
    import Interface3 from '../../../../assets/img/interface/profile-1.png'

    import Thumbsup from '../../../../assets/img/icons/thumbsup-bui.png'
    import ShalsedUi from '../../../../assets/img/icons/shalsed-bui.png' 


    import HeroContent from './HeroContent.vue';
    import Anim from '../../../Others/Anim.vue'

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
   
  // import required modules
  import { Pagination,Autoplay } from 'swiper/modules';
  const modules = [Pagination,Autoplay]


const target_for_fadeLeft = ref()
onMounted(()=>{
    FadeLeft(target_for_fadeLeft)
})
</script>
<template>
    <section class="hero-section">
        
        <!-- Animation -->
        <Anim/>

        <div class="container">
            <div class="row align-items-center"> 
                <div class="col-lg-6">
                    <div ref="target_for_fadeLeft">
                        <HeroContent/> 
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="hero-wrp" v-motion-fade>
                        <div class="hero-img-content">  
                            <img :src="Thumbsup" alt="" class="thumbsup" />
                            <div class="hero_show_items">
                                <img :src="Frame" alt="">
                                <swiper 
                                    :pagination="{
                                        clickable: true,
                                    }"
                                    :autoplay="{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }"
                                    :modules="modules"
                                    class="HeroSwiper"
                                >
                                    <swiper-slide>
                                        <div class="hero-slider-item"><img :src="Interface" alt=""/></div>
                                    </swiper-slide> 
                                    <swiper-slide>
                                        <div class="hero-slider-item"><img :src="Interface2" alt=""/></div>
                                    </swiper-slide> 
                                    <swiper-slide>
                                        <div class="hero-slider-item"><img :src="Interface3" alt=""/></div>
                                    </swiper-slide> 
                                </swiper>
                                </div> 
                                <img :src="ShalsedUi" alt="" class="shalsed-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img :src="Ovarlay" alt="">
    </section>
</template>

<style scoped> 
section.hero-section {
    padding-top: 150px;
    position: relative;
}
section.hero-section .anim_line{
    height: 90%;
}
section.hero-section > img {
    display: block;
    width: 100%;
}
.hero-img-content {
    max-width: 485px;
    width: 475px; 
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.hero-img-content > img {
    position: absolute;
    max-width: 98px;
}

.hero-img-content:after {
    background: var(--gradientBg);
    width: 475px;
    height: 475px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    content: "";
    transform: translate(-50%,-50%);
    z-index: -1;
}

.hero-img-content img.thumbsup {
    bottom: 5%;
    left: 8px;
    z-index: 3;
}

.hero_show_items {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-img-content img.shalsed-logo {
    top: 5%;
    right: 11px;
}
 

.HeroSwiper {
    position: absolute;
    top: 0;
    width: 95%;
    left: 50%;
    border-radius: 35px;
    transform: translateX(-50%);
    z-index: 1; 
    padding-bottom: 45px;
} 
.hero_show_items > img {
    display: block;
    z-index: 2;
}
.hero-slider-item {
    display: block;
    width: 300px;
    height: 635px; 
}
.hero-slider-item img { 
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.HeroSwiper span.swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    background-color: #DADADA;
    opacity: 1;
}

.swiper-pagination-bullet-active {
    background: linear-gradient(290deg, #FE5D5D -1.16%, #FF854B 100%);
}

  
/* Tablet screen :768px. */
@media (min-width: 768px) and (max-width: 991px) {

    .hero-wrp {
    text-align: center;
}
 





}

 
/* small screen :320px. */
@media (max-width: 767px) {

    .hero-wrp {
    text-align: center;
}
.hero-img-content:after { 
    width: 300px;
    height: 300px; 
}
.hero-img-content{
    max-width: 225px;
    width: 225px; 
}
.hero-img-content img.thumbsup {
    bottom: 19%;
    left: -27px; 
    max-width: 50px;
}
.hero-slider-item { 
    width: 212px;
    height: 450px;
}
section.hero-section > img  { 
    margin-top: 50px;
    height: 130px;
    object-fit: cover;
}

}
 

</style>