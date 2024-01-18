<script setup>

import SectionTitle from '../../Others/SectionTitle.vue';
import Testimonial_item from './Testimonial_item.vue';
 

import Avatar from '../../../assets/img/testimonial_user1.png'
import TestimonialBg from '../../../assets/img/avtar_testimonial.png'
import Star from '../../../assets/img/icons/star.png'


  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
   
  // import required modules
  import { Pagination,Autoplay } from 'swiper/modules';
  const modules = [Pagination,Autoplay]

</script>
<template>
    <section class="testimonial-section">
        <img :src="TestimonialBg" alt=""/>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section-title">
                        <SectionTitle>
                            <h1>Best & simple <span>pricing</span></h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                        </SectionTitle>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="testimonial-wrp"> 
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped> 

</style>