<script setup>

import SectionTitle from '../../../Others/SectionTitle.vue'; 

import Icon from '../../../../assets/img/storeicons/android.png'
import Icon2 from '../../../../assets/img/storeicons/apple.png' 

import Step from '../../../../assets/img/blog.png'
import Step2 from '../../../../assets/img/step2.png'
import Step3 from '../../../../assets/img/step3.png'


import VideoBg from '../../../../assets/img/blog2.png'
 
import SingleStep from './SingleStep.vue';
import WatchVideo from './WatchVideo.vue'; 

 

 

</script>
<template>
    <section class="how-it-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2 text-center">
                    <SectionTitle v-motion-slide-visible-bottom>
                        <h1><span>How it works</span> - 3 easy steps</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and. Lorem ipsum dolor sit amet.</p>
                    </SectionTitle>
                </div>
            </div> 
            <div class="row">
                <div class="col-lg-12">
                    <div class="steps">
                        <SingleStep :img="Step" heading="Download app" step_num="01" v-motion-slide-visible-bottom :delay="300">
                            <ul>
                                <li><router-link to="#"><img :src="Icon" alt=""></router-link></li>
                                <li><router-link to="#"><img :src="Icon2" alt=""></router-link></li> 
                            </ul>
                            <p>Download App either for Windows, Mac or Android</p>
                        </SingleStep>
                        <SingleStep :img="Step2" heading="Create account" step_num="02" left_mode="left_img" v-motion-slide-visible-bottom :delay="600">
                            <p><b>14 days free trial</b></p>
                            <p>Sign up free for App account. One account for all devices.</p>
                        </SingleStep>
                        <SingleStep :img="Step3" heading="Enjoy Excited Discounts" step_num="03" v-motion-slide-visible-bottom :delay="900">
                            <p class="d-flex flex-wrap justify-content-end"><b>14 days free trial </b> <router-link to="#">FAQs</router-link></p>
                            <p>Sign up free for App account. One account for all devices.</p>
                        </SingleStep>
                    </div>
                </div> 
                <div class="col-lg-12">
                    <WatchVideo :bgImg="VideoBg" heading="Watch video" contents="Let’s see virtually how it works" videolink="#"/>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section.how-it-section {
    padding-top: 100px;
    margin-top: 100px;
    position: relative;
    overflow: hidden;
}

section.how-it-section {
    padding-top: 100px;
    margin-top: 100px;
    position: relative;
}

section.how-it-section:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -2;
    border-radius: 30px;
    background: #FFF;
    box-shadow: 0px 4px 30px 0px rgba(255, 133, 75, 0.38);
    width: 98%;
    height: 90%;
}
.steps {
    position: relative;
    margin-top: 40px;
}

.steps:after,.steps:before {
    content: "";
    width: 4px;
    height: 80%;
    background: linear-gradient(290deg, #FE5D5D -1.16%, #FF854B 100%);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
}

.steps:before {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    z-index: 1;
}
 .single_step {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-bottom: 50px;
}

.step_wrp > ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.step_wrp > p b {
    font-weight: 600;
    display: block;
    color: #1D1D1D;
}
.step_wrp > ul li {
    margin-left: 5px;
}
  


 

.step_wrp > p a {
    background: var(--MAIN-Gradient, linear-gradient(290deg, #FE5D5D -1.16%, #FF854B 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 27.2px;
    text-decoration-line: underline;
    position: relative;
    margin-left: 5px;
}

.step_wrp > p a:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 4px;
    left: 0;
    background: linear-gradient(290deg, #FE5D5D -1.16%, #FF854B 100%);
}
/* small screen :320px. */
@media (max-width: 767px) {
    .steps:after, .steps:before{
        display: none;
    }
    .step_wrp > ul{
        justify-content: center;
    }
    .single_step { 
        margin-top: 120px;
        margin-bottom: 0;
    }
    .itemPoint > span > b { 
        font-size: 22px; 
    }
    section.how-it-section {
        padding-top: 50px; 
    }
    .single_step .step_wrp p{
        justify-content: center !important;
    }
}

  
</style>