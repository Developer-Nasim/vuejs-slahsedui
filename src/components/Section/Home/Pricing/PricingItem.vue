<script setup>
import ItemPoint from '../../../Others/ItemPoint/ItemPoint.vue';  
 
defineProps({
    contents:{
        type: Object,
        required: true
    }
})


</script>
<template>
    <div class="pricing_item" :class="{ highlighted: contents.highlighted }">
        <div class="pricing_top">
            <ItemPoint :icon="contents.icon"/>
            <h5>{{contents.headings.heading}} <div>{{contents.headings.subheading}}</div></h5>
            <h1><span>{{contents.price}}</span></h1>
            <div class="pricing-content">
                <p v-for="(content,i) in contents.pricing_features" :key="i">{{content}}</p> 
            </div>
        </div>
        <router-link :to="contents.link"><span>BUY NOW</span></router-link> 
    </div>
</template>

<style scoped>
 
.pricing_item {
    position: relative;
    padding: 70px 55px;
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 4px 30px 0px rgba(255, 133, 75, 0.27);
    text-align: center;
    padding-bottom: 170px;
}

.pricing_top {
    text-align: center;
}

.pricing_top .itemPoint {
    display: block;
    margin: auto;
    margin-bottom: 40px;
}

.pricing_top h5 {
    font-size: 19px;
    margin-bottom: 45px;
}

.pricing_top h5 div {
    display: block;
    color: #5C5C5C;
    text-align: center;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25.5px;
}

.pricing_top  h1 {
    font-size: 48px;
    font-weight: 600;
    line-height: 81.6px;
    margin-bottom: 30px;
}

.pricing-content {
    font-size: 13px;
    font-weight: 500;
    opacity: .8;
}

.pricing-content p {
    margin-bottom: 15px;
    line-height: 18px;
}

.pricing_item > a {
    position: absolute;
    bottom: 54px;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 45px;
    border-radius: 100px;
    border: 1px solid #FE5D5D;
    transition: .3s;
    z-index: 2;
}
.pricing_item > a span{
    font-weight: 500;
    background: linear-gradient(290deg, #FE5D5D -1.16%, #FF854B 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    transition: .3s
}
.pricing_item > a:after {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    background: var(--gradientBg);
    top: 0;
    left: 0;
    z-index: -1;
    transition: .3s;
    border-radius: 20px;
} 
.pricing_item > a:hover:after{
    width: 100%;
}
.pricing_item > a:hover span{
    background: transparent;
    background-clip: unset;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;
    color: #fff; 
}









.pricing_item.highlighted {
    background: var(--gradientBg);
    color: var(--white);
}

.pricing_item.highlighted .itemPoint {
    background:  linear-gradient(180deg, #FFF4EF 0%, #FFEAE0 100%);
}

.pricing_item.highlighted .itemPoint span {
    background: linear-gradient(180deg, #FFF4EF 0%, #FFEAE0 100%);
    filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.15));
}

.pricing_item.highlighted  h5 {
    color: var(--white);
}

.pricing_item.highlighted h5 div {
    color: var(--white);
}

.pricing_item.highlighted h1 span {background: var(--white);background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;}

.pricing_item.highlighted > a {
    background: var(--white);
    border: 2px solid transparent;
}

 /* Normal screen :992px. */
 @media (min-width: 992px) and (max-width: 1200px) {

    .pricing_item.highlighted > a {
        padding: 14px 35px;
    }

}
 /* Tablet screen :768px. */
@media (min-width: 768px) and (max-width: 991px) {
    .all-pricings .pricing_item  {
        max-width: 48%; 
    }
    .pricing_item.highlighted > a ,.pricing_item > a {
        padding: 14px 34px;
    }

}


@media (max-width: 767px) {

    .pricing_item.highlighted > a ,.pricing_item > a {
        padding: 14px 34px;
    }
 
}



</style>