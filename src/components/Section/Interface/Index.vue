<script setup>

    import Interface from '../../../assets/img/interface/earnedbadge.png'
    import Interface2 from '../../../assets/img/interface/profile.png'
    import Interface3 from '../../../assets/img/interface/subscription.png'
    import Interface4 from '../../../assets/img/interface/sidemenu.png'
    import Interface5 from '../../../assets/img/interface/profile-1.png'

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
   
  // import required modules
  import { Pagination,Autoplay } from 'swiper/modules';
  const modules = [Pagination,Autoplay]
  
import SectionTitle from '../../Others/SectionTitle.vue'; 
  
</script>
<template>
    <section class="interface-section"> 
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section-title">
                        <SectionTitle>
                            <h1>Beautifull <span>FAQ</span> interface</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                        </SectionTitle>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="interface-wrap"> 
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
            </div>
        </div>
    </section>
</template>

<style scoped> 

</style>