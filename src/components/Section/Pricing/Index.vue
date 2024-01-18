<script setup>

import SectionTitle from '../../Others/SectionTitle.vue';
import Testimonial_item from './Testimonial_item.vue';
 

import Avatar from '../../../assets/img/testimonial_user1.png'
import TestimonialBg from '../../../assets/img/avtar_testimonial.png'
import Star from '../../../assets/img/icons/star.png'
import Switch from '../../Others/Switch.vue';
import PricingItem from './PricingItem.vue';

  

</script>
<template>
    <section class="pricing-section"> 
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
                    <div class="pricings-wrap"> 
                        <div class="month_to_year">
                            <p class="gradienTxt">Monthly</p>
                            <Switch/>
                            <p>Yearly <span>50% off</span></p>
                        </div>
                        <div class="all-pricings">
                            <PricingItem/>
                            <PricingItem/>
                            <PricingItem/>
                        </div>
                        <p>Not sure what to choose ? <a href="#">contact us</a> for custom packages</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped> 

</style>