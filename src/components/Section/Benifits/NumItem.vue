<script setup> 
    defineProps({
        content:{type: Object, required:true}, 
    })
</script>
<template>
    <div class="num-info-item">
        <img :src="content.icon" alt="">
        <div>
            <h1>{{content.heading}}</h1>
            <p>{{content.content}}</p> 
        </div>
    </div>
</template>

<style scoped>
.first-benifit-wrap {
    margin-bottom: 70px;
}
  .num-info-item {
    display: flex;
    align-items: center;
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 4px 10px 0px rgba(255, 133, 75, 0.25);
    padding: 15px 25px;
    margin-top: 30px;
    width: 250px;
}

.num-info-item div {
    margin-left: 20px;
}

.num-info-item div h1 {
    font-weight: 600;
    line-height: 40px;
}
</style>