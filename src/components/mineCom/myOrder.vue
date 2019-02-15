<template>
    <div class="my-order">
        <h2>
            <van-icon name="arrow-left" @click="mine" />
            <p>我的订单</p>
        </h2>
        <div class="nav">
            <ul class="order-nav">
                <li v-for="(item,index) in navList" :key="item.id" :class="{active: selectIndex===index}"
                 ref="item" @click="showTab(index)">{{item}}</li>
            </ul>
        </div>
        <div class="order-main" v-if="selectIndex===0">
            <div class="order-data">
                <p>日期 2017/10/30<i>已取消</i></p>
            </div>
            <div class="order-title">
                <span>几何Time年度尊享会员卡</span>
            </div>
            <div class="order-price">
                <span>总价<i>￥188</i></span>
            </div>
        </div>
    </div>

</template>

<script>
import { getMyorder } from '../../services/mineService.js'
import BScroll from 'better-scroll'

export default {
    props: ['value'],
    data(){
        return {
            navList: [],
            selectIndex: 0
        };
    },
    methods: {
        showTab(index){
            this.selectIndex = index;
        },
        mine(){
            this.$router.back();
        }
    },
    created(){
        getMyorder().then(data=>{
            this.navList = data.navList;

            new BScroll('.nav',{
                scrollX: true,
                scrollY: false,
                click: true
            })
        })
    }
    
}
</script>

<style lang="scss" scoped>
.my-order{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 2;
    h2{
        width: 100%;
        height: 0.36rem;
        line-height: 0.36rem;
        padding: 0 0.1rem;
        box-sizing: border-box;
        margin: 0.1rem 0;
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
    .nav{
        height: 0.42rem;
        .order-nav{
            width: 100%;
            height: 100%;
            border-bottom: 1px solid #E2E2E2;
            box-sizing: border-box;
            display: flex;
            justify-content: space-around;
            align-items: center;
            li{
                height: 0.36rem;
                line-height: 0.32rem;
                color: #4A4A4A;
                text-align: center;
                margin-bottom: -1px;
            }
            li.active{
                color: #E95957;
                border-bottom: 1px solid #E95957;
            }
        }
    }
    .order-main{
        width: 90%;
        height: 1.5rem;
        margin: 0.2rem auto;
        background-color: #E9E9E9;
        border-radius: 0.02rem;
        .order-data{
            height: 0.5rem;
            font-size: 0.06rem;
            padding-top: 0.2rem;
            margin: 0 0.1rem;
            box-sizing: border-box;
            p{
                color: #3F3F3F;
                i{
                    display: block;
                    float: right;
                }
            }
        }
        .order-title{
            height: 0.5rem;
            line-height: 0.5rem;
            border-top: 1px solid #CBCBCB;
            box-sizing: border-box;
            margin: 0 0.1rem;
            span{
                color: #3F3F3F;
            }
        }
        .order-price{
            height: 0.5rem;
            line-height: 0.5rem;
            border-top: 1px solid #CBCBCB;
            box-sizing: border-box;
            margin: 0 0.1rem;
            span{
                color: #999;
                font-size: 0.07rem;
                i{
                    color: #000;
                    font-size: 0.15rem;
                    padding-left: 0.1rem;
                }
            }
        }
    }
}
</style>

