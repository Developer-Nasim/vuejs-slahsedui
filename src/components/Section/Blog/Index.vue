<script setup>

import SectionTitle from '../../Others/SectionTitle.vue'; 
import BlogItem from './BlogItem.vue';
import BlogImg from '../../../assets/img/blog2.png'
import BlogImg2 from '../../../assets/img/blog.png'
import BlogImg3 from '../../../assets/img/blog3.png'
  

  const Blogs = [
    {
        img:BlogImg,
        heading: 'Creative ideas on app.',
        content:'Simply dummy text of the printing and typesetting industry lorem Ipsum has Lorem Ipsum is.'
    },
    {
        img:BlogImg2,
        heading: 'Creative ideas on app.',
        content:'Simply dummy text of the printing and typesetting industry lorem Ipsum has Lorem Ipsum is.'
    },
    {
        img:BlogImg3,
        heading: 'Creative ideas on app.',
        content:'Simply dummy text of the printing and typesetting industry lorem Ipsum has Lorem Ipsum is.'
    }
  ]

</script>
<template>
    <section class="blog-section"> 
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section-title">
                        <SectionTitle>
                            <h1>Read latest <span>story</span></h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                        </SectionTitle>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="all-blogs"> 
                        <BlogItem v-for="blog in Blogs" :content="blog"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped> 

</style>