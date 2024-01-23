<script setup>

import {FadeUp} from '../../../../Helpers/Animation';
import { onMounted, ref } from 'vue';

import SectionTitle from '../../../Others/SectionTitle.vue'; 
 
import FaqItem from './FaqItem.vue';

const faqs = [
    {
        id:0,
        title:'What is Slashed?',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
        id:1,
        title:'How to setup account ?',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
        id:2,
        title:'What is process to get refund ?',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
    {
        id:3,
        title:'What is process to get refund ?',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged.'
    }
]
const target_for_fadeUP = ref() 
const target_for_fadeUP2 = ref() 
const target_for_fadeUP3 = ref() 
const target_for_fadeUP4 = ref() 
onMounted(()=>{
    FadeUp(target_for_fadeUP)
    FadeUp(target_for_fadeUP2)
    FadeUp(target_for_fadeUP3)
    FadeUp(target_for_fadeUP4)
})

</script>
<template>
    <section class="faw-section"> 
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section-title" ref="target_for_fadeUP">
                        <SectionTitle>
                            <h1><span>FAQ</span> - Frequently Asked Questions</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                        </SectionTitle>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="faq-wrap"> 
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <!-- <FaqItem v-for="(faq, i) in faqs" :key="i" :contents="faq" v-motion-slide-visible-bottom :delay="(300 * i)"/> -->
                            <FaqItem :contents="faqs[0]" ref="target_for_fadeUP" :delay="300"/>
                            <FaqItem :contents="faqs[1]" ref="target_for_fadeUP2" :delay="600"/>
                            <FaqItem :contents="faqs[2]" ref="target_for_fadeUP3" :delay="900"/>
                            <FaqItem :contents="faqs[3]" ref="target_for_fadeUP4" :delay="1200"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped> 
 

section.faw-section {
    padding: 100px 0;
}

.faq-wrap {
    margin-top: 45px;
}

</style>