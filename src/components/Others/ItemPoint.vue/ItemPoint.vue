<script setup>
    defineProps({
        icon:{
            type: String,
            required: false
        },
        num:{
            type: String,
            required: false
        }
    })
</script>
<template>
    <div class="itemPoint">
        <span>
            <img v-if="icon" :src="icon" alt=""/>
            <b v-else>{{num}}</b> 
        </span>
    </div>
</template>