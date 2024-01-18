<script setup>

    import DemoImg from '../../../assets/img/downloadfrom.png'
    import Store from '../../../assets/img/storeicons/appstore.png'
    import Store2 from '../../../assets/img/storeicons/appstore.png'

  
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



</script>
<template>
    <section class="download-section"> 
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <DownloadContent :contents="DownloadData"/>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped> 
section.download-section {
    margin: 100px 0;
}

section.download-section .container {
    max-width: 1340px;
}

</style>