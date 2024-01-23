<script setup>
import {FadeUp} from '../../../../Helpers/Animation';
import { onMounted, ref } from 'vue';

import Dashboard from '../../../Layouts/Dashboard.vue'
import Button from '../../../Others/Button.vue'
import CopyToClipBoard from '../../../Others/CopyToClipboard.vue'
import Avater from '../../../../assets/img/dashboard/avatar2.png'
import Icon from '../../../../assets/img/dashboard/users.png'
import Illus from '../../../../assets/img/dashboard/illus.png'
import Arrow from '../../../../assets/img/dashboard/arrow-right.png'
import Discount from '../../../../assets/img/dashboard/discount.png'
import Warning from '../../../../assets/img/dashboard/warning.png'
import BenifitSIdeBar from './BenifitSIdeBar.vue'
import UItem from './UItem.vue' 
import Progress from '../../../Others/Progress.vue'

let Status = ref('pending')

function HandleStatus(status) { 
    Status.value = status
}

const users = {
    pending:[
        {
            img:Avater,
            name:'Ahmed Kareem',
            status:'pending',
            time:'2 days ago',
            discount:'10'
        },
        {
            img:Avater,
            name:'Ahmed Kareem',
            status:'pending',
            time:'2 days ago',
            discount:'10'
        },
        {
            img:Avater,
            name:'Ahmed Kareem',
            status:'pending',
            time:'2 days ago',
            discount:'10'
        }
    ],
    accepted:[ 
        {
            img:Avater,
            name:'Ahmed Kareem',
            status:'accepted',
            time:'2 days ago',
            discount:'10'
        },
        {
            img:Avater,
            name:'Ahmed Kareem',
            status:'accepted',
            time:'2 days ago',
            discount:'10'
        }
    ]
}


// Show Hide SideBar
function HandleSideBar() {
    const sideBar = document.querySelector('.benifit-sidebar')
    sideBar.classList.toggle('active')
}
 
const target_for_fade_up = ref() 
onMounted(()=>{ 
    FadeUp(target_for_fade_up) 
})  
</script>
<template>

    <Dashboard>
        <div class="row">
            <div class="col-lg-12">
                <div class="referrs-wrap" ref="target_for_fade_up">
                    <div class="referrs-contents left">
                        <div class="reffers-title"> 
                            <h5>Invite & Earn</h5>
                            <div class="trightinfos">
                                <div>
                                    <span>Total Referrals</span>
                                    <b>100</b>
                                </div>
                                <img :src="Icon" alt="">
                            </div>
                        </div>
                        <div class="reffers-body">
                            <div class="discount-title">
                                <p>My Discount Coupons</p>
                                <div>
                                    <img :src="Discount" alt="">
                                    <b>2</b>
                                    <router-link to="#">Use Now</router-link> 
                                </div>
                            </div>
                            <div class="rest_contents">

                                <div class="reffaras_proggress">
                                    <h6>Total referrals this month <span>4/10</span></h6>
                                    <Progress width="20"/>
                                    <p>Complete 10 Referrals and get 1 month free </p>
                                </div>

                                <button class="benifit_of_reffars" type="button" @click="HandleSideBar"><img :src="Warning" alt=""> <div>Benefits for referrers <img :src="Arrow" alt=""></div></button>

                                <div class="referral_code">
                                    <img :src="Illus" alt="">
                                    <h6>Invite your friends and Get Reward on each referrals</h6>
                                    <span>Your Referral code</span>

                                    <CopyToClipBoard txt="21SLASHED"/>

                                    <Button btype="button" txt="Invite Freind"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="referrs-contents right">
                        <div class="reffers-title">  
                            <h5>Referrals Status</h5> 
                        </div>
                        <div class="reffers-body"> 
                            <div class="rest_contents">
                                
                                <!-- Filter buttons -->
                                <div class="status_filters">
                                    <button type="button" :class="`${Status == 'pending' && 'active'}`" @click="HandleStatus('pending')">Pending  ({{ users.pending.length }})</button>
                                    <button type="button" :class="`${Status == 'accepted' && 'active'}`" @click="HandleStatus('accepted')">Accepted ({{ users.accepted.length }})</button>
                                </div>

                                <!-- Pending Items -->
                                <div class="users_list" v-show="Status == 'pending'"> 
                                    <UItem v-for="(content,i) in users.pending" :key="i" :contents="content"/>
                                </div>

                                <!-- Accepted Items --> 
                                <div class="users_list" v-show="Status == 'accepted'">
                                    <UItem v-for="(content,i) in users.accepted" :key="i" :contents="content"/> 
                                </div>
                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Dashboard>
    <BenifitSIdeBar />
</template>
<style scoped>
 


.referrs-wrap {
    border-radius: 15px;
    background: #FFF; 
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.10);
    display: flex;
    justify-content: space-between;
}

.referrs-wrap > div {
    width: 50%;
}

.referrs-contents.left {
    border-right: 1px solid var(--Border, #D7D7D7);
}




section.dashboard-area {margin-top: -170px;}

.reffers-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.10);
    height: 67px;
}

.reffers-title h5 {
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
}

.trightinfos {
    display: flex;
    align-items: center;
}

.trightinfos > img {
    margin-left: 6px;
}

.trightinfos  span {
    display: block;
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
    margin-bottom: -8px;
}

.trightinfos b {
    font-size: 12px;
    font-weight: 600;
    background: var(--linear, linear-gradient(91deg, #6199F8 2.26%, #4742F8 91.13%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.trightinfos div {
    text-align: right;
}

.discount-title {
    padding: 12px 30px;
    background: #4bdb8a40;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.discount-title p {
    font-size: 13px;
    line-height: 16px;
    font-weight: 500;
    color: #000;
}

.discount-title  > div {
    display: flex;
    align-items: center;
}

.discount-title > div > b {
    color: #4BDB8A;
    font-weight: 700;
    margin: 0 10px;
}

.discount-title > div > a {
    border-radius: 50px;
    background: var(--Green, #4BDB8A);
    color: #fff;
    font-size: 10px;
    width: 69px;
    height: 23px;
    text-align: center;
    line-height: 23px;
}

.rest_contents {
    padding: 15px 30px;
}

.reffaras_proggress {
    position: relative;
    z-index: 2;
    padding: 20px 22px;
}

.reffaras_proggress:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, #F8B361 0%, #F0C736 100%);
    z-index: -1;
    border-radius: 13px;
    opacity: .15;
}

.reffaras_proggress h6 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    color: #000;
}

.reffaras_proggress h6 b {font-weight: 700;}



.reffaras_proggress p {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: #000;
}

button.benifit_of_reffars {
    display: flex;
    align-items: center;
    margin-top: 15px;
}

button.benifit_of_reffars > div {
    display: flex;
    align-items: center;
    margin-left: 5px;
}

.referral_code {
    text-align: center;
    margin-top: 10px;
}

.referral_code > h6 {
    max-width: 303px;
    margin: auto;
    margin-top: 30px;
    font-size: 16px;
    margin-bottom: 14px;
}

.referral_code > span {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 10px;
    display: block;
}


.referral_code button.themeBtn {
    margin-top: 30px;
    width: 100%;
    border-radius: 15px;
}
.status_filters {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.status_filters button {
    padding: 12px 20px;
    border-radius: 50px;
    border: 1px solid #000;
    position: relative;
    margin-right: 15px;
}
.status_filters button:last-child{
    margin-right: 0;
}
.status_filters button.active {
    background: var(--Black, #000);
    color: #fff;
}


.users_list {
    margin-top: 15px;
}


/* small screen :320px. */
@media (max-width: 767px) {
     










.referrs-wrap {
    flex-wrap: wrap;
}

.referrs-wrap > div {
    width: 100%;
}
.discount-title {
    padding: 12px 15px; 
}
.discount-title > div > b { 
    margin: 0 4px;
}
.rest_contents {
    padding: 15px 10px;
}
.reffaras_proggress{ 
    padding: 15px 15px;
}
.rf_proggress { 
    height: 7px; 
    margin: 5px 0 5px 0;
}
.reffaras_proggress p {
    font-size: 11px; 
    line-height: 14px; 
}
.status_filters button {
    padding: 8px 12px; 
}



 
}







</style>