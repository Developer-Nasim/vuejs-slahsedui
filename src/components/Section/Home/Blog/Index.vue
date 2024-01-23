<script setup>

import {FadeUp} from '../../../../Helpers/Animation';
import { onMounted, ref } from 'vue';

import SectionTitle from '../../../Others/SectionTitle.vue'; 
import BlogImg from '../../../../assets/img/blog2.png'
import BlogImg2 from '../../../../assets/img/blog.png'
import BlogImg3 from '../../../../assets/img/blog3.png'
import BlogItem from './BlogItem.vue';
  

  const Blogs = [
    {
        img:BlogImg,
        heading: 'Creative ideas on app.',
        content:'Simply dummy text of the printing and typesetting industry lorem Ipsum has Lorem Ipsum is.',
        link:'#'
    },
    {
        img:BlogImg2,
        heading: 'Creative ideas on app.',
        content:'Simply dummy text of the printing and typesetting industry lorem Ipsum has Lorem Ipsum is.',
        link:'#'
    },
    {
        img:BlogImg3,
        heading: 'Creative ideas on app.',
        content:'Simply dummy text of the printing and typesetting industry lorem Ipsum has Lorem Ipsum is.',
        link:'#'
    }
  ]

const target_for_fade_up_heading = ref()
const target_for_fade_up = ref() 
onMounted(()=>{
    FadeUp(target_for_fade_up_heading)
    FadeUp(target_for_fade_up) 
})  

</script>
<template>
    <section class="blog-section"> 
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section-title" ref="target_for_fade_up">
                        <SectionTitle>
                            <h1>Read latest <span>story</span></h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                        </SectionTitle>
                    </div>
                </div>
            </div>
                <div class="row" ref="target_for_fade_up" :delay="500">
                    <div class="col-lg-4 col-md-6"  v-for="(blog,i) in Blogs" :key="i">
                        <BlogItem :content="blog"/>
                    </div> 
                </div>
        </div>
    </section>
</template>

<style scoped> 
section.blog-section .section-title {
    margin-bottom: 55px;
}

</style>