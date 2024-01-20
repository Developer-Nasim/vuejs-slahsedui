<script setup>
import Header from '../Others/DashboardHeader/index.vue'
</script>
<template>
    <Header/>
    <section class="dashboard-area">
        <div class="container">
            <slot/>
        </div>
    </section>
</template>

<style scoped>
section.dashboard-area {
    margin-top: -170px;
    position: relative;
    margin-bottom: 30px;
}
</style>