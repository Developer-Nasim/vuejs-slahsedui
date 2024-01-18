<script setup> 
    defineProps({
        num:{type: String, required:true},
        title:{type: String, required:true},
        content:{type: String, required:true}
    })
</script>
<template>
    <div class="accordion-item"> 
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            {{title}}
        </button> 
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">{{content}}</div>
        </div>
    </div> 
</template>

<style scoped>
 
</style>