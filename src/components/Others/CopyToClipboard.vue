<script setup>
import Copy from '../../assets/img/dashboard/copy.png'
import { ref } from 'vue'
const input = ref(null)
    defineProps({
        txt:{type: String,required:true}, 
    })
const CopyFromClipboard = () => { 
        // Get the text content
        var textToCopy =input.value; 

        // Create a range and select the text
        var range = document.createRange();
        range.selectNode(textToCopy);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        // Copy the selected text
        document.execCommand("copy");

        // Deselect the text
        window.getSelection().removeAllRanges();

        
        textToCopy.parentElement.classList.add('copied')
        setTimeout(() => {
            textToCopy.parentElement.classList.remove('copied')
        }, 200);

}
</script>


<template>     
    <div class="copyCode">
        <input ref="input" type="text" :value="txt"/>
        <button type="button" @click="CopyFromClipboard"><img :src="Copy" alt=""></button>
    </div>
</template>


<style scoped>

.copyCode {
    width: max-content;
    margin: auto;
    border-radius: 15px;
    border: 1px dashed var(--Green, #4BDB8A);
    background: rgba(75, 219, 138, 0.15);
    padding: 0 20px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.copyCode.copied {
    background: #00a74933;
}

.copyCode input {
    color: var(--Green, #4BDB8A);
    margin-right: 45px;
    font-weight: 700;
    border: none;
    outline: none;
    pointer-events: none;
    background: transparent;
}

.copyCode  button {
    display: flex;
}
</style>