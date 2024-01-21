<script setup> 
import Hero from '../../components/Section/Home/Hero/Hero.vue'; 
import Brands from '../../components/Section/Home/Brands/Index.vue';
import Features from '../../components/Section/Home/Features/Index.vue';
import Benifits from '../../components/Section/Home/Benifits/Index.vue';
import HowItWork from '../../components/Section/Home/HowItWork/Index.vue';
import Testimonial from '../../components/Section/Home/Testimonial/Index.vue';
import Pricing from '../../components/Section/Home/Pricing/Index.vue';
import Faq from '../../components/Section/Home/Faq/Index.vue';
import Interface from '../../components/Section/Home/Interface/Index.vue';
import Download from '../../components/Section/Home/Download/Index.vue';
import Blog from '../../components/Section/Home/Blog/Index.vue';
import NewsLetter from '../../components/Section/Home/NewsLetter/Index.vue'; 
import Frontend from '../../components/Layouts/Frontend.vue';


</script>
<template> 
    <Frontend> 
        <Hero/>
        <Brands/>
        <Features />
        <Benifits />
        <HowItWork />
        <Testimonial />
        <Pricing />
        <Faq />
        <Interface />
        <Download />
        <Blog />
        <NewsLetter /> 
    </Frontend>
</template>

