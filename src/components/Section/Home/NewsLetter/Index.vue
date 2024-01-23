<script setup>
import {ScaleUp} from '../../../../Helpers/Animation';
import { onMounted, ref } from 'vue';
const target_for_scale = ref()  
onMounted(()=>{
    ScaleUp(target_for_scale) 
})  


 
</script>
<template>
    <section class="news-letter-section"> 
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="news-letter-wraps" ref="target_for_scale" :delay="500">
                        <div>
                            <h1>Subscribe newsletter</h1>
                            <p>Be the first to recieve all latest post in your inbox</p>
                        </div>
                        <form action="#">
                            <input type="text" placeholder="Enter your email" name="" id="">
                            <button type="submit"><span class="gradienTxt">Submit</span></button>
                        </form>
                    </div>
                </div> 
            </div>
        </div>
    </section>
</template>

<style scoped> 
section.news-letter-section {
    margin-top: 100px;
    margin-bottom: -90px;
    position: relative;
    z-index: 3;
}
.news-letter-wraps {
    padding: 50px;
    border-radius: 12px;
    background: var(--MAIN-Gradient, linear-gradient(290deg, #FE5D5D -1.16%, #FF854B 100%));
    box-shadow: 0px 4px 10px 0px rgba(12, 12, 12, 0.13);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

.news-letter-wraps div {
    margin-right: 40px;
}

.news-letter-wraps div h1 {
    color: #FFF;
    letter-spacing: -1px;
}

.news-letter-wraps form {
    display: flex;
    justify-content: end;
    align-items: center;
}

.news-letter-wraps form input {
    width: 380px;
    border-radius: 6px;
    border: 1px solid #CED4DA;
    background: #FFF;
    height: 53px;
    padding: 17.41px 12px 17.59px 12px;
    outline: none;
    margin-right: 11px;
}

.news-letter-wraps form button {
    width: 170px;
    height: 55px;
    padding: 0 20.667px 0 20px;
    border: none;
    outline: none;
    border-radius: 6px;
    background: #FFF;
    font-weight: 500;
    height: 53px;
}
 
/* Tablet screen :768px. */
@media (min-width: 768px) and (max-width: 991px) {
.news-letter-wraps div h1{
    font-size: 28px; 
}
.news-letter-wraps div p{
    line-height: 20px;
    font-size: 15px;
}
.news-letter-wraps form input{
    width: 250px; 
    height: 53px; 
    margin-right: 10px;
}
.news-letter-wraps form button{
    width: 110px; 
    padding: 0 20.667px 0 20px; 
    height: 53px;
}
.news-letter-wraps {
    padding: 24px; 
}





}

 
/* small screen :320px. */
@media (max-width: 767px) {
.news-letter-wraps div h1{
    font-size: 28px; 
}
.news-letter-wraps div p{
    line-height: 20px;
    font-size: 15px;
}
.news-letter-wraps form input{
    width: 100%; 
    height: 45px; 
    margin-right: 10px;
}
.news-letter-wraps form button{
    width: 90px;
    padding: 0 10px 0 10px;
    height: 45px;
}
.news-letter-wraps div {
    margin-right: 0px;
    margin-bottom: 10px;
}
.news-letter-wraps {
    padding: 24px;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
}
.news-letter-wraps form{ 
    width: 100%;
}
}
  

</style>