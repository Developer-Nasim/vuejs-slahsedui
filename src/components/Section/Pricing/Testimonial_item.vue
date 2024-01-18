<script setup>
    defineProps({
        img:{type:String,required:true},
        name:{type:String,required:true},
        position:{type:String,required:true},
        txt:{type:String,required:true}
    })
</script>
<template>
    <div class="testimonial_item">
        <p>{{txt}}</p>
        <div class="user_infos">
            <img :src="img" alt=""/>
            <h5>{{name}}</h5>
            <p>{{position}}</p>
        </div>
    </div>
</template>

<style scoped>
.testimonial_item {
    padding-bottom: 40px;
}
.user_infos {
    margin-top: 35px;
}

.user_infos > img {
    width: 130px;
    height: 130px;
    display: block;
    border-radius: 50%;
    margin: auto;
    object-fit: cover;
    margin-bottom: 10px;
}

.user_infos h5 {
    font-weight: 600;
    /* margin-bottom: 5px; */
}

.user_infos p {
    line-height: 25.5px;
    font-size: 15px;
}

</style>