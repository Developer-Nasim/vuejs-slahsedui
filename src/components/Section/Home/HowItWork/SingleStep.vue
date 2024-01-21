<script setup>
import ItemPoint from '../../../Others/ItemPoint.vue/ItemPoint.vue';

 

defineProps({
    img:{type:String,required:true},
    heading:{type:String,required:true},
    step_num:{type:String,required:true},
    left_mode:{type:String,required:false}
})
 

</script>
<template>
    <div :class="`single_step ${left_mode}`">
        <div class="step_wrp">
            <h5>{{heading}}</h5>
            <slot/>
        </div>
        <ItemPoint :num="step_num"/>
        <div class="step_img"><img :src="img" alt=""></div>
    </div>
</template>

<style scoped>

.single_step > div {
    width: 36%;
}
 
.single_step .step_wrp {
    text-align: right;
}
.step_wrp > h5 {line-height: 24px;font-weight: 600;margin-bottom: 10px;}



.step_wrp >  p {
    margin: 0;
    font-weight: 400;
}


.single_step.left_img {
    flex-direction: row-reverse;
}

.single_step.left_img .step_wrp {
    text-align: left;
}
 
/* small screen :320px. */
@media (max-width: 767px) {


.single_step{ 
    margin-bottom: 30px;
    flex-wrap: wrap;
}
.single_step .step_wrp{
    margin-bottom: 20px;
}
.single_step .step_wrp,
.single_step.left_img .step_wrp{
    text-align: center;
    width: 100%;
}
.single_step > div{
    width: 100%;
}
.single_step  .itemPoint {
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
    max-width: 60px;
}
.single_step  .itemPoint span{
    font-size: 20px;
}
.single_step > div > img {
    display: block;
    width: 1000%;
}

    
}
 
</style>