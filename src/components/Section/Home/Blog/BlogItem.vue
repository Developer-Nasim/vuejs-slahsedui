<script setup> 
    defineProps({
        content:{type: Object, required:true}, 
    })
</script>
<template>
    <div class="single-blog">
        <img :src="content.img" alt="">
        <div>
            <h5>{{content.heading}}</h5>
            <p>{{content.content}}</p>
            <router-link class="gradienTxt" :to="content.link">READ MORE</router-link> 
        </div>
    </div>
</template>

<style scoped>
 .single-blog {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 30px 0px rgba(255, 133, 75, 0.28);
    text-align: center;
}

.single-blog img {
    display: block;
    width: 100%;
    border-radius: 10px;
}

.single-blog > div {
    padding: 34px 21px;
}

.single-blog > div h5 {
    color: #32236F;
    font-weight: 600;
    margin-bottom: 20px;
}

.single-blog > div p {
    font-weight: 400;
    color: #3E3F66;
    margin-bottom: 24px;
}

.single-blog > div  a {
    line-height: 23.8px;
    font-size: 14px;
    font-weight: 600;
}
</style>