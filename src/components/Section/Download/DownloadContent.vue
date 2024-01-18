<script setup>
  

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
defineProps({
    contents:{type:Object, required: true}
})


</script>
<template>
    <div class="download-contents">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="dc-wrp">
                    <h1>{{contents.heading}}</h1>
                    <p>{{contents.content}}</p>
                    <div class="app-stores">
                        <a :href="img.link"  v-for="img in contents.imgs.stores "><img :src="img.img" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <img :src="contents.imgs.demo" class="demoImg" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped> 

</style>