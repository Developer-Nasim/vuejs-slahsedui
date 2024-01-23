<script setup>
import {FadeUp,FadeLeft,FadeRight,FadeIn} from '../../../../Helpers/Animation';
import { onMounted, ref } from 'vue';

import SectionTitle from '../../../Others/SectionTitle.vue';
import Icon from '../../../../assets/img/icons/features/icon.png'
import Icon2 from '../../../../assets/img/icons/features/icon2.png'
import Icon3 from '../../../../assets/img/icons/features/icon3.png'
import Icon4 from '../../../../assets/img/icons/features/icon4.png'
import Fimg from '../../../../assets/img/featuredimg.png'
import FeatureItem from './FeatureItem.vue';


const infos = [
    {
        icon: Icon,
        heading: 'Verified Merchants',
        content: 'Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.',
    },
    {
        icon: Icon2,
        heading: 'User Friendly',
        content: 'Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.',
    },
    {
        icon: Icon3,
        heading: 'Daily Rewards',
        content: 'Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.',
    },
    {
        icon: Icon4,
        heading: 'Excited Discounts',
        content: 'Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.',
    }
]

const target_for_fadeUp = ref()
const target_for_fadeLeft2 = ref()
const target_for_fadeLeft = ref()
const target_for_fadeRight = ref()
const target_for_fadeRight2 = ref()
const target_for_fadeIn = ref()
onMounted(()=>{
    FadeUp(target_for_fadeUp)
    FadeLeft(target_for_fadeLeft)
    FadeLeft(target_for_fadeLeft2)
    FadeRight(target_for_fadeRight)
    FadeRight(target_for_fadeRight2)
    FadeIn(target_for_fadeIn)
})
</script>
<template>
    <section class="features-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section-title" ref="target_for_fadeUp"> 
                        <SectionTitle>
                            <h1><span>Features</span> that makes app different!</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                        </SectionTitle>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="features-wrp">
                        <div class="feature_items text-end">
                            <FeatureItem :contents="infos[0]" ref="target_for_fadeLeft"/> 
                            <FeatureItem :contents="infos[1]" ref="target_for_fadeLeft2" :delay="500"/> 
                        </div>
                        <div class="fimg">
                            <img :src="Fimg" alt="" ref="target_for_fadeIn" :delay="500"/>
                        </div>
                        <div class="feature_items">
                            <FeatureItem :contents="infos[2]" ref="target_for_fadeRight"/>
                            <FeatureItem :contents="infos[3]" ref="target_for_fadeRight2" :delay="500"/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.features-section{
    overflow: hidden;
    padding: 100px 0;
}

.features-section .content_like_title p {
    max-width: 530px;
    margin: auto;
}

.features-wrp {
    position: relative;
    justify-content: center;
    display: flex;
    align-items: flex-end;
    padding-bottom: 40px;
    margin-top: 50px;
}

 
.features-wrp:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 90%;
    bottom: 0;
    z-index: -1;
    border-radius: 30px;
    background: #FFF;
    box-shadow: 0px 4px 30px 0px rgba(255, 133, 75, 0.22);
}

.features-wrp .fimg {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 335px;
    margin: 0 85px;
}

.feature_items {
    margin-bottom: 40px;
    
}
 /* Normal screen :992px. */
@media (min-width: 992px) and (max-width: 1200px) {
    .features-wrp:after{
        bottom: 2.5%;
    }
    .benifit_img {
        max-width: 405px;
        margin-left: 20px;
    }
    .num-info-item{ 
        width: 230px;
    }



} 
/* Tablet screen :768px. */
@media (min-width: 768px) and (max-width: 991px) {
.features-wrp {
    padding: 0px 30px;
    align-items: center;
}
.features-wrp:after {
    height: 100%;
}
.features-wrp .fimg  { 
    margin: 0 40px;
}
.feature_item  {
    margin-top: 0; 
    margin: 40px 0;
    text-align: center;
}

 
}
  

/* small screen :320px. */
@media (max-width: 767px) {
    .features-wrp .fimg{
        display: none;
    }
    .features-wrp {
    padding: 30px;
    padding-bottom: 60px;
}

.features-wrp:after {
    height: 100%;
}

.features-wrp {
    flex-wrap: wrap;
    justify-content: center;
}
.feature_item  {
    margin-top: 0; 
    margin: 40px 0;
    text-align: center;
}
.feature_items{
    margin: 0;
}
.feature_item:last-child{
    margin-bottom: 0;
}







}
  


</style>