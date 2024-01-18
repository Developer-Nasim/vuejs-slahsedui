<script setup>
import StoreButton from '../../Others/StoreButton.vue';
import SocialItem from './SocialItem.vue' 
import LogoWhite from '../../../assets/img/logo-white.png'
import Youtube from '../../../assets/img/icons/social/youtube.svg'
import Insta from '../../../assets/img/icons/social/instagram.svg'
import Facebook from '../../../assets/img/icons/social/facebook.svg'
import GPlay from '../../../assets/img/storeicons/gplay.png'
import AppStore from '../../../assets/img/storeicons/appstore.png'
 
</script>
<template>
    <footer> 
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="footer-widget first">
                        <img :src="LogoWhite" alt="">
                        <a href="mailto:support@example.com">support@example.com</a>
                        <a href="tel:+1-900-123 4567">+1-900-123 4567</a>
                        <div class="socialmedia"> 
                            <SocialItem link="#">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.4695 2.46338H4.31096C2.4634 2.46338 1.23169 3.69509 1.23169 5.54265V9.23777C1.23169 11.0853 2.4634 12.317 4.31096 12.317H10.4695C12.3171 12.317 13.5488 11.0853 13.5488 9.23777V5.54265C13.5488 3.69509 12.3171 2.46338 10.4695 2.46338ZM8.5542 8.02454L7.03302 8.93601C6.41717 9.30552 5.91216 9.02223 5.91216 8.30168V6.47259C5.91216 5.75204 6.41717 5.46875 7.03302 5.83826L8.5542 6.74972C9.13926 7.10691 9.13926 7.6735 8.5542 8.02454Z" fill="white"/>
                                </svg>
                            </SocialItem>
                            <SocialItem link="#">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.97068 1.23193H4.80983C2.56812 1.23193 1.23172 2.56834 1.23172 4.81004V9.96474C1.23172 12.2126 2.56812 13.549 4.80983 13.549H9.96453C12.2062 13.549 13.5426 12.2126 13.5426 9.9709V4.81004C13.5488 2.56834 12.2124 1.23193 9.97068 1.23193ZM7.39026 9.77998C6.07233 9.77998 5.00074 8.7084 5.00074 7.39047C5.00074 6.07254 6.07233 5.00096 7.39026 5.00096C8.70818 5.00096 9.77977 6.07254 9.77977 7.39047C9.77977 8.7084 8.70818 9.77998 7.39026 9.77998ZM11.0361 4.2373C11.0053 4.3112 10.9622 4.37895 10.9068 4.44053C10.8452 4.49596 10.7775 4.53907 10.7035 4.56986C10.6296 4.60065 10.5496 4.61913 10.4695 4.61913C10.3032 4.61913 10.1493 4.55754 10.0323 4.44053C9.97684 4.37895 9.93373 4.3112 9.90294 4.2373C9.87215 4.1634 9.85367 4.08334 9.85367 4.00328C9.85367 3.92321 9.87215 3.84315 9.90294 3.76925C9.93373 3.68919 9.97684 3.6276 10.0323 3.56602C10.1739 3.42437 10.3895 3.35663 10.5865 3.39974C10.6296 3.4059 10.6666 3.41821 10.7035 3.43669C10.7405 3.44901 10.7775 3.46748 10.8144 3.49212C10.8452 3.51059 10.876 3.54138 10.9068 3.56602C10.9622 3.6276 11.0053 3.68919 11.0361 3.76925C11.0669 3.84315 11.0854 3.92321 11.0854 4.00328C11.0854 4.08334 11.0669 4.1634 11.0361 4.2373Z" fill="white"/>
                                </svg> 
                            </SocialItem>
                            <SocialItem link="#">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5488 9.9709C13.5488 12.2126 12.2124 13.549 9.97069 13.549H9.23782C8.8991 13.549 8.62196 13.2719 8.62196 12.9332V9.37968C8.62196 9.2134 8.75745 9.07176 8.92373 9.07176L10.0076 9.05328C10.0939 9.04712 10.1678 8.98554 10.1862 8.89932L10.4018 7.72304C10.4203 7.61218 10.334 7.50748 10.217 7.50748L8.90525 7.52596C8.73281 7.52596 8.59734 7.39048 8.59118 7.2242L8.56654 5.71535C8.56654 5.61681 8.64659 5.5306 8.75129 5.5306L10.2293 5.50596C10.334 5.50596 10.4141 5.42591 10.4141 5.32121L10.3895 3.84315C10.3895 3.73845 10.3094 3.6584 10.2047 3.6584L8.5419 3.68304C7.51958 3.70151 6.70667 4.53907 6.72514 5.56138L6.75593 7.25498C6.76209 7.42742 6.62661 7.56291 6.45417 7.56907L5.71513 7.58138C5.61044 7.58138 5.53039 7.66144 5.53039 7.76613L5.54886 8.93627C5.54886 9.04096 5.62891 9.12102 5.73361 9.12102L6.47264 9.10871C6.64508 9.10871 6.78055 9.24419 6.78671 9.41047L6.84214 12.9208C6.8483 13.2657 6.57116 13.549 6.22628 13.549H4.80983C2.56812 13.549 1.23172 12.2126 1.23172 9.96473V4.81004C1.23172 2.56833 2.56812 1.23193 4.80983 1.23193H9.97069C12.2124 1.23193 13.5488 2.56833 13.5488 4.81004V9.9709Z" fill="white"/>
                                </svg>
                            </SocialItem>
                        </div>
                    </div>
                </div> 
                <div class="col-lg-5">
                    <div class="footer-widget second">
                        <div> 
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div> 
                            <h4>Help & Suport</h4>
                            <ul>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">How it works</a></li>
                                <li><a href="#">Terms & conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-widget last">
                        <h4>Let’s Try Out</h4>
                        <StoreButton :img="GPlay" href="#"/>
                        <StoreButton :img="AppStore" href="#"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyRight">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="copy-wrap">
                            <p>© Copyrights 2022. All rights reserved.</p>
                            <p>Design & developed by </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped> 
footer {
    background: var(--Main-Gradient, linear-gradient(290deg, #FE5D5D -1.16%, #FF854B 100%));
    color: #fff;
    padding-top: 150px;
}

.footer-widget {
    font-weight: 400;
}
.socialmedia {
    display: flex;
    margin-top: 30px;
}
.social-item:hover svg path{
    transition: .3s;
}
.social-item:hover svg path{fill: #FE5D5D;}

.socialmedia > a {
    margin-right: 10px;
}
.footer-widget.first > img {
    display: block;
    max-width: 150px;
    margin-bottom: 26px;
}

.footer-widget.first > a {
    display: block;
    margin-bottom: 15px;
}

.footer-widget h4 {
    color: #FFF;
    font-weight: 600;
    margin-bottom: 40px;
}

.footer-widget.second {
    display: flex;
    justify-content: space-between;
}

.footer-widget.second ul li a {
    margin-bottom: 10px;
    display: block;
}

.footer-widget.last {
    max-width: 220px;
    margin-left: auto;
}

.footer-widget.last > a {
    border: none;
    max-width: 185px;
    width: 185px;
    margin-bottom: 15px;
    padding: 0 20px;
}

.copyRight {
    border-top: 1px solid rgba(255, 255, 255, 0.36);
    background: var(--MAIN-Gradient, linear-gradient(290deg, #FE5D5D -1.16%, #FF854B 100%));
    margin-top: 70px;
}

.copy-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    font-size: 15px;
}
</style>