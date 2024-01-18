<script setup> 
import Icon from '../../../assets/img/icons/tick.png'
    defineProps({
        content:{type: Object, required:true}, 
    })
</script>
<template>
    <div class="info-benift-item"> 
        <img :src="Icon" alt="">
        <div>
            <h4>{{content.heading}}</h4>
            <p>{{content.content}}</p> 
        </div>
    </div>
</template>

<style scoped>
  .info-benift-item {
    display: flex;
    align-items: baseline;
}

.info-benift-item > img {
    position: relative;
    top: 3px;
    margin-right: 18px;
}

.info-benift-item  h4 {
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 10px;
}
 
</style>