<script setup>
import Button from '../Button.vue';
import MenuItem from './MenuItem.vue';
</script>
<template>
    <nav class="d-flex align-items-center justify-content-between">
        <ul class="d-flex align-items-center justify-content-between">
            <MenuItem href="" txt="Home" />
            <MenuItem href="#" txt="Features" />
            <MenuItem href="#" txt="How it works" />
            <MenuItem href="#" txt="Pages" />
            <MenuItem href="#" txt="Pricing" /> 
            <MenuItem href="#" txt="Blog" /> 
            <MenuItem href="#" txt="Contact" /> 
        </ul>
        <Button href="#" txt="GET STARTED"/>
    </nav>
</template>

<style scoped> 
    nav ul{
        margin-right: 30px;
    }
    nav > a {
        position: relative;
    }
    nav > a:before, nav > a:after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 42px;
        z-index: -1; 
    }

    nav > a:before {
        animation: pulse-blue-medium-sm 3.5s infinite;
    }
    nav > a:after {
        animation: pulse-blue-small-sm 3.5s infinite;
        animation-delay: .5s;
    }
    @keyframes pulse-blue-medium-sm {
        0% {
            box-shadow: 0 0 0 0 rgba(107, 73, 242, 0.4);
        }

        100%,
        30% {
            box-shadow: 0 0 0 20px transparent
        }
    }
@keyframes pulse-blue-small-sm {
  0% {
    box-shadow: 0 0 0 0 rgba(107, 73, 242, 0.7);
  }

  100%,
  30% {
    box-shadow: 0 0 0 12px transparent
  }
}

@keyframes pulse-blue-medium-sm {
  0% {
    box-shadow: 0 0 0 0 rgba(107, 73, 242, 0.4);
  }

  100%,
  30% {
    box-shadow: 0 0 0 20px transparent
  }
}

/* Normal screen :992px. */
@media (min-width: 992px) and (max-width: 1200px) {
 

}


</style>