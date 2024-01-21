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
<style scoped>
.itemPoint {
    width: 98px;
    max-width: 98px;
    height: 98px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #FFF4EF 0%, #FFEAE0 100%);
    border-radius: 50%;
    padding: 11px;
    filter: drop-shadow(0px 4px 8px rgba(255, 133, 75, 0.38));
}

.itemPoint > span {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(180deg, #FFF4EF 0%, #FFEAE0 100%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.15));
}
.itemPoint > span > b {
    text-align: center;
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    background: var(--Main-Gradient, linear-gradient(290deg, #FE5D5D -1.16%, #FF854B 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* small screen :320px. */
@media (max-width: 767px) {
    .itemPoint > span > b {
        font-size: 20px;
    }
}

</style>