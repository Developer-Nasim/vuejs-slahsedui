<script setup>

import SectionTitle from '../../../Others/SectionTitle.vue'; 
 
 
import Icon from '../../../../assets/img/icons/pricing/pricing.png'
import Icon2 from '../../../../assets/img/icons/pricing/pricing2.png'
import Icon3 from '../../../../assets/img/icons/pricing/pricing3.png'

import Switch from '../../../Others/Switch.vue';
import PricingItem from './PricingItem.vue';


const pricings = [
    {
        icon:Icon,
        headings:{
            heading:"Freemium",
            subheading:"For the basics",
        },
        price: "$0",
        pricing_features:[
            "Unlimited access to all promotions.",
            "Exclusive promotions reserved for Premium and OG subscribers. ",
            "Priority customer support for OG subscribers"
        ],
        highlighted:false,
        link: '#'
    },
    {
        icon:Icon2,
        headings:{
            heading:"Premium",
            subheading:"For the professionals",
        },
        price: "$30",
        pricing_features:[
            "Unlimited access to all promotions.",
            "Exclusive promotions reserved for Premium and OG subscribers. ",
            "Priority customer support for OG subscribers"
        ],
        highlighted:true,
        link: '#'
    },
    {
        icon:Icon3,
        headings:{
            heading:"OG",
            subheading:"For small team",
        },
        price: "$30",
        pricing_features:[
            "Unlimited access to all promotions.",
            "Exclusive promotions reserved for Premium and OG subscribers. ",
            "Priority customer support for OG subscribers"
        ],
        highlighted:false,
        link: '#'
    }
]

</script>
<template>
    <section class="pricing-section"> 
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section-title" v-motion-slide-visible-bottom>
                        <SectionTitle>
                            <h1>Best & simple <span>pricing</span></h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.</p>
                        </SectionTitle>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="pricings-wrap">
                        <div class="month_to_year" v-motion-slide-visible-bottom :delay="300"> 
                            <Switch/> 
                        </div>
                        <div class="all-pricings">
                            <PricingItem v-for="(price,index) in pricings" :key="index" :contents="price" v-motion-slide-visible-bottom :delay="(300 * index)"/>
                        </div>
                        <p  v-motion-slide-visible-bottom>Not sure what to choose ? <router-link to="#" class="gradienTxt">contact us</router-link> for custom packages</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped> 
.month_to_year {
    margin-top: 30px;
}





.all-pricings {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.all-pricings .pricing_item {
    max-width: 355px;
    margin-top: 40px;
}


.pricings-wrap {
    text-align: center;
}

.pricings-wrap > p {
    text-align: center;
    margin-top: 90px;
}

 /* Normal screen :992px. */
 @media (min-width: 992px) and (max-width: 1200px) {
    .all-pricings .pricing_item {
    max-width: 320px; 
}


}


@media (max-width: 767px) {
    .all-pricings .pricing_item  {
        max-width: 100%; 
        width: 100%;
    }
    .all-pricings { 
        justify-content: center;
    }
}


</style>