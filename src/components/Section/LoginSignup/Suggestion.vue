<script setup> 
import Google from '../../../assets/img/icons/social/google.png'
defineProps({
    suggestion: {type: String,required:true}
})
</script>
<template>
    <div class="more_joining_option">
        <div class="divider"><span>or</span></div>
        <p>{{suggestion == 'signin' ? 'Sign up with your work email' : 'Sign In with your work email'}}</p> 
        <router-link to="#"><img :src="Google" alt=""> Sign Up with Google</router-link>
        <p>
            {{suggestion == 'signin' ? 'Don’t have an account?' : 'Already have an account?'}}  
            <router-link to="#" class="gradienTxt">{{suggestion == 'signin' ? 'Sign Up here' : 'Sign In here'}}</router-link>
        </p>
    </div>
</template>
<style scoped>
 
.more_joining_option {
    position: relative;
    border-top: 1px solid #E4E4E4; 
    padding-top: 0;
}

.more_joining_option .divider {
    width: max-content;
    margin: auto;
    margin-top: -16px;
    background: #fff;
    padding: 0 10px;
    text-transform: uppercase;
    margin-bottom: 15px;
}

.more_joining_option > a {
    display: flex;
    height: 60.61px;
    padding: 18px 60.766px 18px 61.08px;
    justify-content: center;
    align-items: flex-start;
    border-radius: 100px;
    border: 1.5px solid #EDEDED;
    width: max-content;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 20px;
}

.more_joining_option > a img {
    margin-right: 20px;
}
 
</style>