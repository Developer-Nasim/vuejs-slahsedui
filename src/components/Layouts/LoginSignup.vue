<script setup>
import {FadeUp,FadeIn} from '../../Helpers/Animation';
import { onMounted, ref } from 'vue';
import Bg from '../../assets/img/join-bg.png'
import Logo from '../../assets/img/logo-white.png'

const target_for_fadeIn = ref()
const target_for_fadeUp = ref() 

onMounted(()=>{
    FadeUp(target_for_fadeUp) 
    FadeIn(target_for_fadeIn) 
})
</script>
<template>
    <section class="login_signup">
        <img :src="Bg" alt=""/>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="login_signup_wrap" ref="target_for_fadeIn">
                        <router-link to="/"> 
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.24201 3.84787H3.75401L5.80201 1.79987C5.86601 1.72521 5.89801 1.63987 5.89801 1.54387C5.89801 1.44788 5.86601 1.36254 5.80201 1.28787L4.93801 0.439875C4.86334 0.365208 4.77801 0.327874 4.68201 0.327874C4.58601 0.327874 4.50068 0.365208 4.42601 0.439875L0.12201 4.74387C0.0473431 4.81854 0.0100098 4.90387 0.0100098 4.99987C0.0100098 5.09587 0.0473431 5.18121 0.12201 5.25587L4.42601 9.55987C4.50068 9.63454 4.58601 9.67188 4.68201 9.67188C4.77801 9.67188 4.86334 9.63454 4.93801 9.55987L5.80201 8.71187C5.86601 8.63721 5.89801 8.55187 5.89801 8.45587C5.89801 8.35987 5.86601 8.27454 5.80201 8.19987L3.61001 6.00787H9.24201C9.34868 6.00787 9.43668 5.97321 9.50601 5.90387C9.57534 5.83454 9.61001 5.74654 9.61001 5.63987V4.19987C9.61001 4.10387 9.57534 4.02121 9.50601 3.95187C9.43668 3.88254 9.34868 3.84787 9.24201 3.84787Z" fill="white"/>
                            </svg>
                            Back 
                        </router-link> 
                        <img :src="Logo" alt="">

                    </div>
                </div>
                <div class="col-lg-6 col-md-8 offset-lg-3 offset-md-2 text-center">
                    <div class="login_signup_form" ref="target_for_fadeUp">
                        <slot/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
section.login_signup {
    min-height: 100vh;
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 95px 0 85px 0;
}

section.login_signup > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
}
.login_signup_wrap {margin-bottom: 40px;}

.login_signup_wrap a {
    color: #fff;
    display: flex;
    font-weight: 500;
    width: max-content;
    align-items: center;
}

.login_signup_wrap a > svg {
    margin-right: 8px;
}

.login_signup_wrap > img {
    display: block;
    margin: auto;
}

.login_signup_form {
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.33);
} 
 
/* Tablet screen :768px. */
@media (min-width: 768px) and (max-width: 991px) {
section.login_signup { 
    padding: 45px 0 70px 0;
}

}

 
/* small screen :320px. */
@media (max-width: 767px) {

section.login_signup { 
    padding: 45px 0 50px 0;
}
 
 
}
 




</style>