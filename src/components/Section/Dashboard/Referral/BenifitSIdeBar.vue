<script setup>  
import Close from '../../../../assets/img/dashboard/close.png' 
import Discount from '../../../../assets/img/dashboard/discount2.png'
import Warning from '../../../../assets/img/dashboard/warning.png'
 

const allbenifits = [ 
    {
        icon:Discount,
        heading:'On each Referral you will get 10% Discount',
        content:'eg : If you have 8 Referrals then you will get 80% discount ( 9 Referrals = 90% )'
    }, 
    {
        icon:Discount,
        heading:'On each Referral you will get 10% Discount',
        content:'eg : If you have 8 Referrals then you will get 80% discount ( 9 Referrals = 90% )'
    }, 
]
 

// Show Hide SideBar
function HandleSideBar() {
    const sideBar = document.querySelector('.benifit-sidebar')
    sideBar.classList.toggle('active')
}


</script>
<template>

    <div class="benifit-sidebar">
        <div class="benifit-sidebar-overlay" @click="HandleSideBar"></div>
        <div class="benifit-sidebar-wrap">
            <div class="benifit-sidebar-head">
                <p><img :src="Warning" alt=""> Benefits for referrers</p>
                <button type="button" @click="HandleSideBar"><img :src="Close" alt=""></button>
            </div>
            <div class="benifit-sidebar-contents">
                <div class="benifit-sidebar-content-lists">

                    <!-- Benifit Items -->
                    <div class="benifit-sidebar-content-item" v-for="(item,i) in allbenifits" :key="i">
                        <div class="icon">
                            <img :src="item.icon" alt="">
                        </div>
                        <div>
                            <h5>{{item.heading}}</h5>
                            <p>{{item.content}}</p>
                        </div>
                    </div> 


                </div>
            </div>
        </div>
    </div>

</template>
<style scoped>
.benifit-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    
    opacity: 0;
    visibility: hidden;
}

.benifit-sidebar-overlay {
    width: 100%;
    height: 100%;
    background: #00000063;
    opacity: .5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    transition: .3s;
}

.benifit-sidebar-wrap {
    width: 380px;
    margin-left: auto;
    background: #fff;
    min-height: 100vh;
    padding: 25px;
    border-radius: 15px 0px 0px 15px;
    margin-right: -500px;
    transition: .3s;
}
.benifit-sidebar.active,
.benifit-sidebar.active .benifit-sidebar-overlay{
    opacity: 1;
    visibility: visible;
}

.benifit-sidebar.active .benifit-sidebar-wrap {
    margin-right: 0px;
}

.benifit-sidebar-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 21px;
}

.benifit-sidebar-head p {
    display: flex;
    align-items: center;
    font-weight: 400;
    color: #000;
}

.benifit-sidebar-head p img {
    margin-right: 5px;
}

.benifit-sidebar-head button {
    display: flex;
    padding: 0;
}

.benifit-sidebar-contents {
    padding: 30px 20px;
    position: relative;
    z-index: 2;
}

.benifit-sidebar-contents:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 13px;
    background: linear-gradient(180deg, #F8B361 0%, #F0C736 100%);
    opacity: .15;
}

.benifit-sidebar-content-lists {
    position: relative;
    z-index: 2;
}
.benifit-sidebar-content-lists::after{
    content: "";
    position: absolute;
    width: 1px;
    height: 75%;
    left: 19px;
    top: 0;
    z-index: -1;
    background: #000;
}
.benifit-sidebar-content-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
}

.benifit-sidebar-content-item .icon {
    background: #FFF;
    border: 1px solid #000;
    border-radius: 50%;
    min-width: 38px;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
}

.benifit-sidebar-content-item div h5 {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 6px;
}

.benifit-sidebar-content-item div p {
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
}
.benifit-sidebar-content-item:last-child{
    margin-bottom: 0;
}
</style>