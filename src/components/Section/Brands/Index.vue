<script setup>

import SectionTitle from '../../Others/SectionTitle.vue';
import Logo from '../../../assets/img/companies/paypal.png'
import Logo2 from '../../../assets/img/companies/spoty.png'
import Logo3 from '../../../assets/img/companies/shopboat.png'
import Logo4 from '../../../assets/img/companies/slack.png'
import Logo5 from '../../../assets/img/companies/envato.png'


  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
   
  // import required modules
  import { Pagination,Autoplay } from 'swiper/modules';
  const modules = [Pagination,Autoplay]

</script>
<template>
    <section class="brands-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section-title"> 
                        <SectionTitle>
                            <h1>Trusted by <span>150+</span> companies</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                        </SectionTitle>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="all-brands">
                        <swiper 
                            :pagination="{
                                clickable: true,
                            }"
                            :slidesPerView="5"
                            :spaceBetween="50"
                            :loop="true"
                            :autoplay="{
                                delay: 2500,
                                disableOnInteraction: false,
                            }"
                            :modules="modules"
                            :breakpoints="{
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
                            class="HeroSwiper"
                        >
                            <swiper-slide><img :src="Logo" alt=""/></swiper-slide> 
                            <swiper-slide><img :src="Logo2" alt=""/></swiper-slide> 
                            <swiper-slide><img :src="Logo3" alt=""/></swiper-slide> 
                            <swiper-slide><img :src="Logo4" alt=""/></swiper-slide> 
                            <swiper-slide><img :src="Logo5" alt=""/></swiper-slide>  
                            <swiper-slide><img :src="Logo5" alt=""/></swiper-slide>  
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.brands-section{
    padding: 100px 0;
} 
.all-brands img{
    margin-bottom: 20px;
    filter: grayscale(1);
    transition: .3s all;
}
.all-brands img:hover{
    filter: unset;
} 
.all-brands {
    margin-top: 40px;
}

</style>