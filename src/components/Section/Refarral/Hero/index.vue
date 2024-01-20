<script setup> 
    import HeroContent from './HeroContent.vue';
    import Ovarlay from '../../../../assets/img/ovarlay.png'  
    
    import Hero from '../../../../assets/img/hero2.png' 
 

</script>
<template>
    <section class="hero-section rafarral-hero mt-5">
        <div class="container">
            <div class="row align-items-center"> 
                <div class="col-lg-6">    
                    <HeroContent/>
                </div>
                <div class="col-lg-6">
                    <div class="hero-wrp">
                        <div class="hero-img-content">  
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
  
 

</style>