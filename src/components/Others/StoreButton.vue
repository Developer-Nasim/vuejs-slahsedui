<script setup>
    defineProps({
        img:{type: String,required:true},
        href:{type: String,required:true}
    })
</script>
<template> 
<router-link :to="href" class="storeBtn"><img :src="img" alt=""/></router-link> 
</template>
<style scoped>
    .storeBtn{
        width: max-content;
        text-transform: uppercase;
        font-weight: 500;
        display: flex;
        height: 60px;
        padding: 0 40px;
        color: var(--white);
        border-radius: 10px;
        background: #fff;
        border: 2px solid var(--Gradient-2, #6199F8);
        align-items: center;
        justify-content: center;
    }
.hero-btns > a:hover img {
    mix-blend-mode: plus-lighter;
}
.hero-btns a.storeBtn img{
    transition: .3s;
} 

</style>