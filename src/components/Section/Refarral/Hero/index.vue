<script setup> 
import {FadeLeft,FadeIn} from '../../../../Helpers/Animation';
import { onMounted, ref } from 'vue';

    import HeroContent from './HeroContent.vue';
    import Ovarlay from '../../../../assets/img/ovarlay.png'  
    
    import Hero from '../../../../assets/img/hero2.png' 
    import Anim from '../../../Others/Anim.vue'
 
const target_for_fadeLeft = ref()
const target_for_fadeIn = ref()
onMounted(()=>{
    FadeLeft(target_for_fadeLeft)
    FadeIn(target_for_fadeIn)
})

</script>
<template>
    <section class="hero-section rafarral-hero mt-5">
        <!-- Animation -->
        <Anim/>

        <div class="container">
            <div class="row align-items-center"> 
                <div class="col-lg-6">
                    <div ref="target_for_fadeLeft">
                    <HeroContent/>
                    </div>  
                </div>
                <div class="col-lg-6">
                    <div class="hero-wrp">
                        <div class="hero-img-content" ref="target_for_fadeIn">  
                            <img :src="Hero" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img :src="Ovarlay" alt="">
    </section>
</template>

<style scoped> 
section.hero-section {
    padding-top: 150px;
    position: relative;
}
section.hero-section .anim_line{
    height: 90%;
}
section.hero-section > img {
    display: block;
    width: 100%;
}
.hero-img-content {
    max-width: 485px;
    width: 475px; 
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.hero-img-content > img { 
    margin-left: auto;
}
 
.hero_show_items {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}
/* small screen :320px. */
@media (max-width: 767px) {
.hero-img-content {
    max-width: 280px;
    width: 280px; 
}

 
}
  
  

</style>