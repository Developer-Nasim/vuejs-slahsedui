<script setup>

import {ScaleUp} from '../../../../Helpers/Animation';
import { onMounted, ref } from 'vue';

    import DemoImg from '../../../../assets/img/downloadfrom.png'
    import Store from '../../../../assets/img/storeicons/appstore.png'
    import Store2 from '../../../../assets/img/storeicons/appstore.png'

  
import DownloadContent from './DownloadContent.vue'; 
  

const DownloadData = {
    heading: 'Let’s download free from apple and play store',
    content: "Instant free download from apple and play store orem Ipsum is simply dummy text of the printing. and typese tting indus orem Ipsum has beenthe standard",
    imgs:{
        demo: DemoImg,
        stores:[
        {img: Store, link:'#'},
        {img: Store2, link:'#'}
    ]
    }
    
}



const target_for_scale = ref()  
onMounted(()=>{
    ScaleUp(target_for_scale) 
})  


onMounted(()=>{
    const TargetELement = document.querySelector('.download-section')
    if (TargetELement) { 
        window.addEventListener('scroll', (e) => {
            const fromTop = TargetELement.offsetTop
            const scrolled = window.scrollY
            if ((fromTop - (TargetELement.clientHeight)) < scrolled && (fromTop+(TargetELement.clientHeight/2)) > scrolled) {
                TargetELement.classList.add('highlited')
            }else{
                if (TargetELement.classList.contains('highlited')) {
                    TargetELement.classList.remove('highlited')
                }
            }
        })
    }
})


</script>
<template>
    <section class="download-section"> 
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <DownloadContent :contents="DownloadData" ref="target_for_scale" :delay="500"/>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped> 
section.download-section {
    margin: 100px 0;
    position: relative;
    z-index: 99;
}
section.download-section:after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #851700;
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    transition: .3s;
    z-index: -1;
}
section.download-section.highlited:after{
    opacity: .7;
    visibility: visible;
}
section.download-section .container {
    max-width: 1340px;
}

</style>