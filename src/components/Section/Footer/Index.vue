<script setup>
import StoreButton from '../../Others/StoreButton.vue';
import SocialItem from './SocialItem.vue'
import Logo from '../../../assets/img/logo.png'
import Youtube from '../../../assets/img/icons/social/youtube.svg'
import Insta from '../../../assets/img/icons/social/instagram.svg'
import Facebook from '../../../assets/img/icons/social/facebook.svg'
import GPlay from '../../../assets/img/storeicons/gplay.png'
import AppStore from '../../../assets/img/storeicons/appstore.png'
 const socialmedias = [
    {link:'#',img:Youtube},
    {link:'#',img:Insta},
    {link:'#',img:Facebook},
 ]
</script>
<template>
    <footer> 
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="footer-widget first">
                        <img :src="Logo" alt="">
                        <a href="mailto:support@example.com">support@example.com</a>
                        <a href="tel:+1-900-123 4567">+1-900-123 4567</a>
                        <div class="socialmedia">
                            <SocialItem v-for="item in socialmedias" :content="item"/>
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

</style>