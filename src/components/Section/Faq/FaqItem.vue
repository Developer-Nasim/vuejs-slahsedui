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
 
.accordion-item {
    margin-bottom: 20px;
    border: none;
    background: #FFF;
    box-shadow: 0px 4px 10px 0px rgba(255, 133, 75, 0.20);
    border-radius: 13px !important;
    overflow: hidden;
}

.accordion-item button {
    box-shadow: none !IMPORTANT;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    z-index: 2;
    transition: .3s;
}

.accordion-item button:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradientBg);
    content: "";
    z-index: -1;
    opacity: 0;
    transition: .3s;
}

button.accordion-button:not(.collapsed) {
    color: #fff;
}

.accordion-button:not(.collapsed):before {
    opacity: 1;
}

.accordion-button:not(.collapsed)::after {
    background: none;
    content: "-";
    transform: unset;
    position: relative;
    top: -5px;
    font-weight: 400;
    font-size: 24px;
}

.accordion-button.collapsed:after {
    content: "+";
    background: none;
    position: relative;
    transform: unset;
    top: -5px;
    color: #737373;
    font-weight: 400;
    font-size: 24px;
}
</style>