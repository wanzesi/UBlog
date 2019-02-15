<template>
<div class="ren">
     <div class="wrap" v-for="item in list" :key="item.id">
         <div class="pic">
             <img :src="item.img" alt="">
             <div class="price">￥{{item.price}}</div>
         </div>
         <span>{{item.tic1}}</span>
         <strong>{{item.tic2}}</strong>
         <p>{{item.name}}</p>
         <div class="title">
         <i v-for="itemList in item.title" :key="itemList.titleName">#{{itemList.titleName}}</i>
        </div>
        </div>
        </div>
</template>

<script>
import { Icon } from 'vant';
import Vue from 'vue';
Vue.use(Icon);
import {getPeopleData} from '../../services/homeService'
export default {
    props:['data'],
data(){
    return{
      list:[],
       
    }
},
methods:{
    back(){
            this.$router.back()
        }
},
created(){
    getPeopleData().then(data=>{
        this.list=data
    })
}
}
</script>

<style lang="scss" scoped>
.ren{
    background: #fff;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.wrap{
    background: #fff;
    width: 100%;
    height: 3rem;
    .pic{
        width: 100%;
        position: relative;
        img{
                width: 100%;
            }
        .price{
            position: absolute;
            left: 0;
            bottom: 0.2rem;
            width: 0.64rem;
            height: 0.36rem;
            background:#000;
            opacity: 0.7;
            font-size: 0.12rem;
            color: #ffffff;
            text-align: center;
            line-height: 0.36rem;
            
        }
    }
    span{
        margin: 0.1rem;
        display: inline-block;
        background-color: #85b9a0;
      text-align: center;
      line-height: 0.18rem;
      margin-top: 0.1rem;
      font-size: 0.08rem;
      color: #fff;
      font-weight: normal;
      padding: 0.015rem 0.04rem;
      border-radius: 0.02rem;
      margin-bottom: 0.06rem;
    }
    strong{
        font-weight: normal;
        display: inline-block;
        background: burlywood;
      text-align: center;
      line-height: 0.18rem;
      margin-top: 0.1rem;
      font-size: 0.08rem;
      color: #fff;
      font-weight: normal;
      padding: 0.015rem 0.04rem;
      border-radius: 0.02rem;
      margin-bottom: 0.06rem;
    }
    p{
      font-size: 0.18rem;
      margin-left: 0.1rem;
      color: #333333;
    }
    i{
        display: block;
        margin: 0.05rem;
            float: left;
            font-style: normal;
            font-size: 0.08rem;
            line-height: 0.3rem;
            color: #999;
    }
}

</style>

