<template>
    <div class="membership">
        <h1>
            <van-icon name="arrow-left" @click="mine" />
            <p>会员权益</p>
        </h1>
        <div class="member-ship">
            <div class="membership-top">
                {{word1}}
            </div>
            <div class="membership-list" v-for="item in membershipList" :key="item.id">
                <h2>{{item.title}}</h2>
                <p>{{item.cword}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { getMembership } from '../../services/mineService.js'
import { Icon } from 'vant';

Vue.use(Icon);

export default {
    data(){
        return {
            word1: null,
            membershipList: []
        };
    },
    created(){
        getMembership().then(data=>{
            this.word1 = data.word1;
            this.membershipList = data.membership;
        })
    },
    methods: {
        mine(){
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>
.membership{
    width: 100%;
    height: 100%;
    padding: 0 0.1rem;
    box-sizing: border-box;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    h1{
        width: 100%;
        height: 0.36rem;
        line-height: 0.36rem;
        background-color: #fff;
        padding: 0.1rem 0;
        position: fixed;
        top: 0;
        left: 0;
        i{
            color: #4a4a4a;
            font-size: 0.24rem;
            padding-top: 0.07rem;
            float: left;
            display: block;
        }
        p{
            width: 80%;
            font-size: 0.22rem;
            font-weight: 600;
            text-align: center;
        }
    }
    .member-ship{
        margin-top: 0.56rem;
        .membership-list{
            h2{
                font-size: 0.22rem;
                padding: 0.1rem 0;
            }
        }
    }
}
</style>

