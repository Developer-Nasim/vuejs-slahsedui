<script setup>

import SectionTitle from '../../Others/SectionTitle.vue';
import Button from '../../Others/Button.vue';

import Icon from '../../../assets/img/icons/rewards/icon.png'
import Icon2 from '../../../assets/img/icons/rewards/icon2.png'
import Icon3 from '../../../assets/img/icons/rewards/icon3.png'
import Icon4 from '../../../assets/img/icons/rewards/icon4.png'

import InfoImg from '../../../assets/img/rawardsimg.png' 
import InfoImg2 from '../../../assets/img/rawardsui.png' 
import NumInfoItem from './NumInfoItem.vue';
import TickItem from './TickItem.vue';


 

</script>
<template>
    <section class="information-section">
        <div class="container">
            <div class="info_item"> 
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="info_img">
                            <img :src="InfoImg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="info_wrp">
                            <SectionTitle>
                                <h1>Daily Rewards and Coupons for <span>Slashed User</span></h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and. Lorem ipsum dolor sit amet.</p>
                            </SectionTitle>
                            <div class="info_nums">
                                <NumInfoItem :img="Icon" heading="10M+" contents="Download"/>
                                <NumInfoItem :img="Icon2" heading="20M+" contents="Followers"/>
                                <NumInfoItem :img="Icon3" heading="324k+" contents="Reviews"/>
                                <NumInfoItem :img="Icon4" heading="150+" contents="Countries"/>
                            </div>
                            <Button href="#" txt="START FREE TRIAL"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info_item right_img"> 
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="info_img">
                            <img :src="InfoImg2" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="info_wrp">
                            <SectionTitle>
                                <h1>Beautiful design with <span>modern UI</span></h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and.</p>
                            </SectionTitle>
                            <div class="tick_infos">
                                <TickItem heading="Carefully designed" contents="Lorem Ipsum is simply dummy text of the printing and type esetting industry lorem Ipsum has."/>
                                <TickItem heading="Seamless Sync" contents="Simply dummy text of the printing and typesetting inustry lorem Ipsum has Lorem dollar summit."/>
                                <TickItem heading="Access Drive" contents="Printing and typesetting industry lorem Ipsum has been the industrys standard dummy text of type setting."/> 
                            </div>
                            <Button href="#" txt="START FREE TRIAL"/>
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
 
</style>