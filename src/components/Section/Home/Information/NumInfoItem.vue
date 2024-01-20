<script setup>
 

defineProps({
    img:{type:String,required:true},
    heading:{type:String,required:true},
    contents:{type:String,required:true}
})
 

</script>
<template>
    <div class="num_info_item">
        <img :src="img" alt="">
        <div>
            <h1>{{heading}}</h1>
            <p>{{contents}}</p>
        </div>
    </div>
</template>

<style scoped>

 
 
</style>