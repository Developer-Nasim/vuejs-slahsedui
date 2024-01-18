<script setup>
 

defineProps({
    img:{type:String,required:true},
    heading:{type:String,required:true},
    contents:{type:String,required:true}
})
 

</script>
<template>
    <div class="feature_item">
        <img :src="img" alt="">
        <h4>{{heading}}</h4>
        <p>{{contents}}</p>
    </div>
</template>

<style scoped>


.feature_item {
    margin-top: 65px;
    max-width: 300px;
}

.feature_item img {
    max-height: 98px;
}

.feature_item  h4 {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
}

.feature_item  p {margin-top: 10px;margin-bottom: 0;}
  
 
</style>