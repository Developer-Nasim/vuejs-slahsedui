<script setup>

import SectionTitle from '../../../Others/SectionTitle.vue';
import Icon from '../../../../assets/img/icons/benifits/icon.png'
import Icon2 from '../../../../assets/img/icons/benifits/icon2.png'
import Icon3 from '../../../../assets/img/icons/benifits/icon3.png'
import Icon4 from '../../../../assets/img/icons/benifits/icon4.png'
import Fimg from '../../../../assets/img/benifits.png'
import FeatureItem from '../../Home/Features/FeatureItem.vue';

const infos = [
    {
        icon: Icon,
        heading: 'Special Welcome Offer',
        content: 'Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.',
    },
    {
        icon: Icon2,
        heading: 'Track Your Referrals',
        content: 'Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.',
    },
    {
        icon: Icon3,
        heading: 'Referral rewards',
        content: 'Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.',
    },
    {
        icon: Icon4,
        heading: '1 Month Free',
        content: 'Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.',
    }
]

 

</script>
<template>
    <section class="features-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section-title"
                        v-motion
                        :initial="{y: 100,opacity: 0}"
                        :visible="{y: 0,opacity: 1}" 
                        :duration="1600"
                    > 
                        <SectionTitle>
                            <h1>Referral Program <span>Benefits</span></h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                        </SectionTitle>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="features-wrp">
                        <div class="feature_items text-end">
                            <FeatureItem :contents="infos[0]" v-motion-slide-visible-left :duration="3000" />
                            <FeatureItem :contents="infos[1]" v-motion-slide-visible-left :duration="3000" :delay="500"/> 
                        </div>
                        <div class="fimg">
                            <img :src="Fimg" alt="" v-motion-fade-visible :delay="500" />
                        </div>
                        <div class="feature_items">
                            <FeatureItem :contents="infos[2]" v-motion-slide-visible-right :duration="3000"/>
                            <FeatureItem :contents="infos[3]" v-motion-slide-visible-right :duration="3000" :delay="500"/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.features-section{
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