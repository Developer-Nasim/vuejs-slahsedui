<script setup>
 

defineProps({
    contents:{type:Object, required: true}
})
 

</script>
<template>
    <div class="feature_item">
        <img :src="contents.icon" alt="">
        <h4>{{contents.heading}}</h4>
        <p>{{contents.content}}</p>
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
   
/* Tablet screen :768px. */
@media (min-width: 768px) and (max-width: 991px) {
.feature_item img {
    max-height: 60px;
}

 
}
  
</style>