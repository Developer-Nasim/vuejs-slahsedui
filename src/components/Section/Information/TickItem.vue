<script setup>
import Icon from '../../../assets/img/icons/tick.png'

defineProps({ 
    heading:{type:String,required:true},
    contents:{type:String,required:true}
})
 

</script>
<template>
    <div class="tick_info_item">
        <img :src="Icon" alt="">
        <div>
            <h4>{{heading}}</h4>
            <p>{{contents}}</p>
        </div>
    </div>
</template>

<style scoped>

 
 
</style>