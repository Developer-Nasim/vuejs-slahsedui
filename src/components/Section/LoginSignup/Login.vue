<script setup>
import Button from '../../Others/Button.vue'
    import LoginSignup from '../../Layouts/LoginSignup.vue'
    import SectionTitle from '../../Others/SectionTitle.vue'; 
    import Suggestion from './Suggestion.vue';
</script>


<template>
    <LoginSignup>
        <form action="#">
            <div> 
                <SectionTitle>
                    <h1>Welcome to <span>Slashed</span></h1>
                    <p>Fill all fields so we can get some info about you. We'll never send you spam</p>
                </SectionTitle>
    
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Password"> 
                <Button btype="submit" txt="SIGN IN"/>
            </div>

            <!--singup,signin  -->
            <Suggestion suggestion="signin"/> 

        </form>
    </LoginSignup>
</template>





<style scoped>
form > div{
    padding: 40px 60px;
}
form button {
    border: none;
    margin-top: 40px;
    width: 240px;
}
form input {
    display: block;
    width: 100%;
    height: 56px;
    padding: 15.5px 20px;
    border-radius: 12px;
    border: 1.5px solid #EDEDED;
    background: #FFF;
    outline: none;
    margin-top: 20px;
}
 
</style>