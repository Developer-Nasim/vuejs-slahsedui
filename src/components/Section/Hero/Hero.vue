<script setup>
    import ItemPoint from '../../Others/ItemPoint.vue/ItemPoint.vue';
    import HeroContent from './HeroContent.vue';
    import Ovarlay from '../../../assets/img/ovarlay.png'
    import Frame from '../../../assets/img/fullframe.png'
    // import Frame from '../../../assets/img/icons/frame.png'
    import Icon from '../../../assets/img/icons/thumbsup.png'
    import Icon2 from '../../../assets/img/icons/slashed.png'
</script>
<template>
    <section class="hero-section mt-5 pt-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <HeroContent/>
                </div>
                <div class="col-lg-6">
                    <div class="hero-wrp">
                        <div class="hero-img-content">
                                <img :src="Frame" alt="">
                            <!-- <ItemPoint :icon="Icon"/>
                            <div class="hero_show_items">
                                <img :src="Frame" alt="">

                            </div>
                            <ItemPoint :icon="Icon2"/> -->
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

</style>