<script setup> 
import {ref} from 'vue'
import PlayIcon from '../../../../assets/img/icons/play.png' 



defineProps({ 
    bgImg:{type:String,required:true},
    heading:{type:String,required:true},
    contents:{type:String,required:true},
    videolink:{type:String,required:true},
})

let showIframe= ref(false)
 

</script>
<template>
    <div class="watch_video">
        <img :src="bgImg" alt=""/>
        <div class="watch_video_wrp"> 
            <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="showIframe = true"><img :src="PlayIcon" alt=""></button>
            <div>
                <h6>{{contents}}</h6>
                <h2>{{heading}}</h2>
            </div>
        </div>
    </div> 

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content"> 
                <div class="modal-body">
                    <button type="button" data-bs-dismiss="modal" @click="showIframe = false">x</button>
                    <iframe v-if="showIframe" width="560" height="315" src="https://www.youtube.com/embed/D0UnqGm_miA?si=BKsgETr56mbSu5Jd&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div> 
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

.watch_video_wrp > div {
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
.watch_video_wrp button:before {
    content: "";
    color: red;
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 80px;
    height: 80px;
    background: #fff;
    border-radius: 50%;
    -webkit-animation: pulse-border 1500ms ease-out infinite;
    animation: pulse-border 1500ms ease-out infinite;
    z-index: -1;
}
@keyframes pulse-border {
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
}
  

 
.modal-dialog {
    max-width: 768px;
}
.modal-content {
    border: none;
    background: none;
}

.modal-body {
    padding: 0;
    text-align: right;
}

.modal-body iframe {
    width: 100%;
    height: 400px;
}

.modal-body button {
    background: red;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 24px;
    font-family: cursive;
    padding: 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 7px;
    margin-bottom: 10px;
    margin-left: auto;
}




/* small screen :320px. */
@media (max-width: 767px) {
.watch_video {
    width: 100%; 
    padding: 50px 25px; 
    margin-top: 20px;
}
.modal-dialog {
    max-width: 90%;
}
.modal.show .modal-dialog {
    transform: none;
    margin: auto;
    margin-top: 15px;
}

.modal-body iframe { 
    height: 300px;
}
 
}
</style>