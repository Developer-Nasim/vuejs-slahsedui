<script setup>

import SectionTitle from '../../../Others/SectionTitle.vue';
import Button from '../../../Others/Button.vue';

import BImg from '../../../../assets/img/benifits/b.png'
import BImg2 from '../../../../assets/img/benifits/b2.png'
import BImg3 from '../../../../assets/img/benifits/b-bg.png'

import BImg4 from '../../../../assets/img/benifits/b3.png'
import BImg5 from '../../../../assets/img/benifits/b4.png'
 
  
import Icon from '../../../../assets/img/icons/rewards/icon.png'
import Icon2 from '../../../../assets/img/icons/rewards/icon2.png'
import Icon3 from '../../../../assets/img/icons/rewards/icon3.png'
import Icon4 from '../../../../assets/img/icons/rewards/icon4.png'


import InfoItem from './InfoItem.vue';
import NumItem from './NumItem.vue';


const NumInfos = [
    { 
        icon: Icon,
        heading: '10M+',
        content:'Download'
    },
    { 
        icon: Icon2,
        heading: '20M+',
        content:'Followers'
    },
    { 
        icon: Icon3,
        heading: '324k+',
        content:'Reviews'
    } ,
    { 
        icon: Icon4,
        heading: '150+',
        content:'Countries'
    } 
  ]

  const ListInfos = [
    {  
        heading: 'Carefully designed',
        content:'Lorem Ipsum is simply dummy text of the printing and type esetting industry lorem Ipsum has.'
    },
    {  
        heading: 'Seamless Sync',
        content:'Lorem Ipsum is simply dummy text of the printing and type esetting industry lorem Ipsum has.'
    },
    {  
        heading: 'Access Drive',
        content:'Lorem Ipsum is simply dummy text of the printing and type esetting industry lorem Ipsum has.'
    }  
  ]

</script>
<template>
    <section class="benifit-section"> 
        <div class="container"> 
            <div class="first-benifit-wrap"> 
                <div class="row">
                    <div class="col-lg-6">
                        <div class="benifit_img with_bgs">
                            <img :src="BImg" alt="" class="b">
                            <img :src="BImg2" alt="" class="b2">
                            <img :src="BImg3" alt="" class="background">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="benifit_wrap"> 
                            <SectionTitle>
                                <h1>Daily Rewards and Coupons for <span>Slashed User</span></h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and. Lorem ipsum dolor sit amet.</p>
                            </SectionTitle>
                            <div class="benifit_wrap_nums_info">
                                <NumItem v-for="(Info, i) in NumInfos" :key="i" :content="Info"/> 
                            </div>
                            <Button href="#" txt="START FREE TRIAL"/>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="second-benifit-wrap"> 
                <div class="row">
                    <div class="col-lg-6">
                        <div class="benifit_wrap"> 
                            <SectionTitle>
                                <h1>Beautiful design with <span>modern UI</span></h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and. Lorem ipsum dolor sit amet.</p>
                            </SectionTitle>
                            <div class="benifit_lists">
                                <InfoItem v-for="(Info, i) in ListInfos" :key="i" :content="Info"/> 
                            </div> 
                        </div>
                    </div> 
                    <div class="col-lg-6">
                        <div class="benifit_img with_out_bg">
                            <img :src="BImg4" alt="" class="b">
                            <img :src="BImg5" alt="" class="b2"> 
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </section>
</template>

<style scoped> 
section.blog-section .section-title {
    margin-bottom: 55px;
}
.benifit-section .container{
    max-width: 1340px;
}
.benifit_img {
    position: relative;
    z-index: 4;
}
.benifit_img.with_bgs {
    max-width: 550px;
}

.benifit_img.with_bgs > img.b {
    position: absolute;
    top: -50px;
    left: -30px;
}

.benifit_img.with_bgs > img.b2 {
    position: absolute;
    right: -65px;
    bottom: 28%;
}

.benifit_img.with_out_bg {}

.benifit_img.with_out_bg img.b2 {
    position: absolute;
    right: 0;
    top: 19%;
}

.benifit_img.with_out_bg img.b {
    margin-left: auto;
    display: block;
    margin-right: 30%;
}
.benifit_lists {}

.benifit_lists .info-benift-item {
    margin-bottom: 30px;
}

.benifit_lists {
    margin-top: 50px;
}

.benifit_wrap_nums_info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 560px;
    margin-top: 20px;
    margin-bottom: 40px;
}




.benifit_img.with_bgs {
    max-width: 550px;
}
section.benifit-section {
    padding-top: 50px;
}

.first-benifit-wrap {
    margin-bottom: 70px;
}




</style>