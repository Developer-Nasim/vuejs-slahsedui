<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css' 
onMounted(() => {
   AOS.init({ 
      duration: 1500 
    })
})
 
</script>
<template> 
   <router-view></router-view>
</template> 
