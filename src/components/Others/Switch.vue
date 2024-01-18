<template>
    <div class="toggle">
        <input type="checkbox"/>
        <b class="monthly">Monthly</b>
        <label></label>
        <b class="yearly">Yearly <span  class="gradienTxt">50% off</span></b>
    </div>
</template>
<style scoped>
.toggle {
  position: relative;
  box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
}
.toggle input[type="checkbox"] {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
}
.toggle label {
  position: relative;
  display: flex;
  align-items: center;
  height: 36px;
  box-sizing: border-box;
    margin: 0 15px 0 10px;
}
.toggle label:before {
  content: "";
  width: 72px;
  height: 36px;
  border-radius: 20px;
  position: relative;
  display: inline-block;
  transition: 0.2s ease;
  box-sizing: border-box;
  background-color: #fff; 
}
.toggle label:after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--gradientBg);
  border-radius: 20px;
  box-sizing: border-box;
  left: 0;
  top: 0;
  transform: translate(8px , 8px);
  transition: 0.2s ease;
}
.toggle b {
    font-weight: 600;
    line-height: 27.2px;
    color: #1D1D1D;
    display: flex;
    align-items: center;
}

.toggle b span { 
    position: relative; 
    display: block;
    padding: 5px 10px;
    font-size: 13px; 
    font-weight: 400;
    line-height: 22.1px;
    margin-left: 6px;
}
.toggle b span:after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 5px;
    z-index: -1;
} 
.toggle input[type="checkbox"]:checked ~ label:after { 
  transform: translate(47px, 8px);
}
.toggle input[type="checkbox"]:not(:checked) ~ .monthly,
.toggle input[type="checkbox"]:checked ~ .yearly{
  background: var(--gradientBg);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
} 


</style>