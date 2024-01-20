<script setup>
defineProps({
    contents:{
        type: Object,
        required:true
    }
})
</script>
<template>
    <div class="ulist" :class="contents.status">
        <img :src="contents.img" alt="">
        <div class="ulist-content">
            <div>
                <h6 class="text-truncate">{{contents.name}}</h6>
                <p>{{contents.status}}</p>
            </div>
            <div>
                <span>{{contents.time}}</span>
                <b>{{contents.discount}}% Discount</b>
            </div>
        </div>
    </div>
</template>
<style scoped>
.ulist {
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #D7D7D7;
}
.ulist:last-child{
    border: none;
}

.ulist > img {
    width: 50px;
    height: 50px;
    min-width: 50px;
    border-radius: 50%; 
    margin-right: 10px;
}

.ulist-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.ulist-content p {color: var(--Red-error, #FF2828);font-size: 12px;line-height: 18px;}

.ulist-content  span {
    display: block;
    text-align: right;
    font-size: 10px;
    font-weight: 400;
    opacity: 0.5;
    line-height: 15px;
}

.ulist-content b {
    font-weight: 600;
    font-size: 15px;
    color: var(--Red-error, #FF2828);
    display: block;
    line-height: 24px;
}

.ulist.accepted .ulist-content p {
    color: #6199F8;
}

.ulist.accepted .ulist-content b {
    color: var(--Green, #4BDB8A);
}

</style>