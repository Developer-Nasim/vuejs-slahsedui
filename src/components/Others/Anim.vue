<script setup>
defineProps({
    white: {type: Boolean, required:false}
})
</script>
<template>
    <div class="anim_line" :class="{ white: white }">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
<style scoped>
/* animation line wraper */
.anim_line { 
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0; 
    overflow: hidden;
    z-index: -1;
}
.anim_line.white span{
    background: linear-gradient(45deg, transparent, #fff);
}
.anim_line span {
    transform: rotate(180deg);
    display: block;
    width: 1px;
    height: 100px;
    background: linear-gradient(45deg, transparent, #de6d61);
    position: absolute;
    z-index: 99999;
    top: -275px;
    animation: star_down_one 6s infinite linear;
    opacity: 0;
}
 

 

.anim_line span:first-child {
    left: -17%;
    animation-delay: 3s;
}

.anim_line span:nth-child(2) {
    left: 0%;
    animation-delay: 5s;
}

.anim_line span:nth-child(3) {
    left: 17%;
    animation-delay: 1s;
}

.anim_line span:nth-child(4) {
    left: 34%;
    animation-delay: 4s;
}

.anim_line span:nth-child(5) {
    left: 51%;
    animation-delay: 7s;
}

.anim_line span:nth-child(6) {
    left: 68%;
}

.anim_line span:nth-child(7) {
    left: 85%;
    animation-delay: 3s;
}

.anim_line span:nth-child(8) {
    left: 99%;
    animation-delay: 2s;
}

.anim_line span:nth-child(9) {
    left: 117%;
    animation-delay: 5s;
}
 

@keyframes star_down_one {
    0% {
        opacity: 0;
        top: -250px;
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        top: 100%;
        opacity: 0;
    }
}


</style>