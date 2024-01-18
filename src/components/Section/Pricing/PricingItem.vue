<script setup>
import ItemPoint from '../../Others/ItemPoint.vue/ItemPoint.vue';
import Button from '../../Others/Button.vue';
import Icon from '../../../assets/img/icons/pricing/pricing.png'
import Icon2 from '../../../assets/img/icons/pricing/pricing2.png'
import Icon3 from '../../../assets/img/icons/pricing/pricing3.png'
 
</script>
<template>
    <div class="pricing_item">
        <div class="pricing_top">
            <ItemPoint :icon="Icon"/>
            <h5>Freemium <div>For the basics</div></h5>
            <h1><span>$0</span></h1>
            <div class="pricing-content">
                <p>Unlimited access to all promotions.</p>
                <p>Exclusive promotions reserved for Premium and OG subscribers. </p>
                <p>Priority customer support for OG subscribers</p> 
            </div>
        </div>
        <Button href="#" txt="Buy Now"/>
    </div>
</template>

<style scoped>
 
</style>