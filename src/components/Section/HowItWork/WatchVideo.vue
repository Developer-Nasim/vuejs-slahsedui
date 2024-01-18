<script setup> 
import PlayIcon from '../../../assets/img/icons/play.png' 

defineProps({ 
    bgImg:{type:String,required:true},
    heading:{type:String,required:true},
    contents:{type:String,required:true},
    videolink:{type:String,required:true},
})
 

</script>
<template>
    <div class="watch_video">
        <img :src="bgImg" alt=""/>
        <div class="watch_video_wrp"> 
            <button type="button"><img :src="PlayIcon" alt=""></button>
            <div>
                <h6>{{contents}}</h6>
                <h2>{{heading}}</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>

.watch_video {
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 90px;
    text-align: center;
    margin-top: 50px;
}

.watch_video > img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
}

.watch_video:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(255, 133, 75, 0.60) 0%, rgba(255, 133, 75, 0.60) 100%);
    top: 0;
    left: 0;
    z-index: -1;
}

.watch_video_wrp {
    color: #fff;
}

.watch_video_wrp h6 {
    color: #fff;
    line-height: 27.2px;
    margin-bottom: 6px;
    font-weight: 600;
}

.watch_video_wrp  h2 {
    color: #fff;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 51px;
}

.watch_video_wrp  > div {
    margin-top: 60px;
}

.watch_video_wrp button {
    padding: 0;
    position: relative;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    background: none;
    margin-top: 30px;
    z-index: 3;
}

.watch_video_wrp button:after,.watch_video_wrp button:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    top: 0;
    left: 0;
    transform: scale(2);
    z-index: -1;
    border-radius: 50%;
    opacity: .4;
    transition: .3s all;
}
 
</style>