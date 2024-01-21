<script setup>

import SectionTitle from '../../../Others/SectionTitle.vue';
 

import Avatar from '../../../../assets/img/testimonial_user1.png'
import TestimonialBg from '../../../../assets/img/avtar_testimonial.png'
import Star from '../../../../assets/img/icons/star.png'

import Testimonial_item from './Testimonial_item.vue';

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
                            <h1>Trusted by <span>150+</span> companies</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                        </SectionTitle>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="testimonial-wrp">
                        <swiper 
                            :pagination="{
                                clickable: true,
                            }"
                            :slidesPerView="1" 
                            :loop="true"
                            :autoplay="{
                                delay: 2500,
                                disableOnInteraction: false,
                            }"
                            :modules="modules" 
                            class="TestimonialSwiper"
                        >
                            <swiper-slide>
                                <Testimonial_item :img="Avatar" name="Shayna John" position="Careative inc" txt="“ Lorem Ipsum is simply dummy text of the printing and typese tting us orem Ipsum has been lorem beenthe standar dummy. ”" />
                            </swiper-slide>
                            <swiper-slide>
                                <Testimonial_item :img="Avatar" name="Shayna John" position="Careative inc" txt="“ Lorem Ipsum is simply dummy text of the printing and typese tting us orem Ipsum has been lorem beenthe standar dummy. ”" />
                            </swiper-slide>
                        </swiper>
                        <div class="total_reviews">
                            <div class="trvs">
                                <div>
                                    <img :src="Star" alt="">
                                </div>
                                <span>5.0 / 5.0</span>
                            </div>
                            <h1>2578</h1>
                            <p>TOTAL USER REVIEWS </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
 section.testimonial-section {
    position: relative;
    margin: 100px 0;
    z-index: 2;
}
section.testimonial-section:after {
    content: "";
    position: absolute;
    width: 50%;
    height: 60%;
    top: 50%;
    left: 50%;
    background: radial-gradient(#fff, transparent);
    display: block;
    transform: translate(-50%, -50%);
    z-index: -1;
}
section.testimonial-section > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
}

section.testimonial-section .section-title {
    margin-bottom: 130px;
}

.testimonial-wrp {
    max-width: 440px;
    margin: auto;
    text-align: center;
}

.total_reviews {
    display: block;
    margin-top: 70px;
}

.trvs {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
}

.trvs > div {
    display: flex;
    align-items: center;
    margin-right: 10px;
}

.trvs > div > img {
    margin-right: 4px;
}

.trvs > span {
    font-weight: 600;
    color: #1D1D1D;
}

.total_reviews h1 {
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: 60px;
}

.total_reviews p {
    background: var(--MAIN-Gradient, linear-gradient(290deg, #FE5D5D -1.16%, #FF854B 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
} 
@media (max-width: 767px) {

    section.testimonial-section > img{
    display: none;
}
section.testimonial-section .section-title{
    margin-bottom: 50px;
}
 



}

</style>