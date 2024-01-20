<script setup> 
    import logo from '../../../assets//img/logo-white.png' 
    import Avatar from '../../../assets//img/dashboard/avatar.png' 
    import LogoutIcon from '../../../assets//img/dashboard/logout.png' 
    import Bade from '../../../assets//img/dashboard/badge.png' 
</script>


<template>
    <header class="dashboard-header">
        <div class="container">
            <div class="row"> 
                <div class="col-lg-12">
                    <div class="header-wraped d-flex align-items-center justify-content-between">
                        <router-link to="/dashboard" class="logo"><img :src="logo" alt=""></router-link> 
                        <div class="header-right-wraps">
                            <div class="menus">
                                <router-link to="/dashboard" class="active">My Referrals</router-link> 
                            </div>
                            <div class="loggedininfos">
                                <button type="button"><img :src="LogoutIcon" alt=""></button>
                                <div class="avatarInfos">
                                    <div>
                                        <h5>Jhon Doe</h5>
                                        <span><img :src="Bade" alt=""> Level > </span>
                                    </div> 
                                    <img :src="Avatar" alt="">
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </header>

</template>

<style scoped>
header{
    padding: 20px 0;
    background: var(--main-gradient, linear-gradient(290deg, #FE5D5D -1.16%, #FF854B 100%));
    padding-bottom: 185px;
}
.header-right-wraps {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-left: 100px;
}

a.logo {
    width: 200px;
}

.menus {
    display: flex;
    align-items: center;
}

.menus > a {
    color: #FFF;
    font-weight: 600;
    position: relative;
}

.menus > a.active:after {
    content: "";
    position: absolute;
    width: 70%;
    height: 3px;
    background: #fff;
    bottom: -8px;
    left: 0;
    border-radius: 10px;
}

.loggedininfos {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.loggedininfos > button {
    display: flex;
    margin-right: 22px;
}

.avatarInfos {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.avatarInfos > img {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    border: 2px solid var(--Wjite, #FFF);
    margin-left: 11px;
}

.avatarInfos h5 {
    font-size: 18px;
    color: #fff;
    margin-bottom: 4px;
}

.avatarInfos span {
    display: flex;
    margin-left: auto;
    background: var(--443, linear-gradient(180deg, #F8B361 0%, #F0C736 100%));
    text-align: center;
    width: max-content;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    height: 21px;
    padding: 5px 6px;
    font-size: 10px;
    font-weight: 500;
    color: #fff;
}

.avatarInfos span > img {
    width: 12px;
    margin-right: 3px;
}
</style>