<script setup>
import {FadeUp} from '../../../../Helpers/Animation';
import { onMounted, ref } from 'vue';

    import SectionTitle from '../../../Others/SectionTitle.vue'; 

    import Interface from '../../../../assets/img/interface/earnedbadge.png'
    import Interface2 from '../../../../assets/img/interface/profile.png'
    import Interface3 from '../../../../assets/img/interface/subscription.png'
    import Interface4 from '../../../../assets/img/interface/sidemenu.png'
    import Interface5 from '../../../../assets/img/interface/profile-1.png'

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
   
  // import required modules
  import { Pagination,Autoplay } from 'swiper/modules';
  const modules = [Pagination,Autoplay]

const target_for_fadeUP = ref() 
const target_for_fadeUP2 = ref()
onMounted(()=>{
    FadeUp(target_for_fadeUP)
    FadeUp(target_for_fadeUP2) 
})  
  
</script>
<template>
    <section class="interface-section"> 
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section-title" ref="target_for_fadeUP">
                        <SectionTitle>
                            <h1>Beautifull <span>interface</span> </h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                        </SectionTitle>
                    </div>
                </div> 
            </div>
        </div>
        <div class="container-fluid"> 
            <div class="interface-wrap" ref="target_for_fadeUP2" :delay="500"> 
                <swiper 
                    :slidesPerView="5"
                    :spaceBetween="50"
                    :loop="true"
                    :pagination="{
                        clickable: true,
                    }"
                    :centeredSlides="true"
                    :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }"
                    :modules="modules"
                    class="InterfaceSlider"
                    :breakpoints="{
                        '0': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '640': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '768': {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        '1024': {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }"
                >
                    <swiper-slide>
                        <div class="interface-item"><img :src="Interface" alt=""/></div>
                    </swiper-slide> 
                    <swiper-slide>
                        <div class="interface-item"><img :src="Interface2" alt=""/></div>
                    </swiper-slide> 
                    <swiper-slide>
                        <div class="interface-item"><img :src="Interface3" alt=""/></div>
                    </swiper-slide> 
                    <swiper-slide>
                        <div class="interface-item"><img :src="Interface4" alt=""/></div>
                    </swiper-slide> 
                    <swiper-slide>
                        <div class="interface-item"><img :src="Interface5" alt=""/></div>
                    </swiper-slide> 

                    
                    <swiper-slide>
                        <div class="interface-item"><img :src="Interface" alt=""/></div>
                    </swiper-slide> 
                    <swiper-slide>
                        <div class="interface-item"><img :src="Interface2" alt=""/></div>
                    </swiper-slide> 
                    <swiper-slide>
                        <div class="interface-item"><img :src="Interface3" alt=""/></div>
                    </swiper-slide> 
                    <swiper-slide>
                        <div class="interface-item"><img :src="Interface4" alt=""/></div>
                    </swiper-slide> 
                    <swiper-slide>
                        <div class="interface-item"><img :src="Interface5" alt=""/></div>
                    </swiper-slide> 
                </swiper>
            </div>
        </div>
    </section>
</template>

<style scoped> 

.interface-wrap {
    margin-top: 50px;
    margin-bottom: 130px;
}
.interface-item {
    margin: 50px 0; 
}
.interface-item img {
    display: block;
    width: 100%;
    transform: scale(.95);
    transition: .3s;
}
.swiper-slide-active .interface-item img {
    transform: scale(1.13);
}  
 
/* Tablet screen :768px. */
@media (min-width: 768px) and (max-width: 991px) {


}

 
/* small screen :320px. */
@media (max-width: 767px) {
.interface-item {
    margin: 20px 0;
}
.interface-wrap{
    margin: auto;
    margin-top: 50px;
    margin-bottom: 130px;
    max-width: 300px;
}




}
  
</style>