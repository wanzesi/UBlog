<template>
<div class="group">
    <div class="header" @click="back">
        <span><van-icon name="arrow-left" /></span>
        </div>
        <h1>团建</h1>
            <img :src="img1" class="banner">
        <div class="content">
         <div class="picList-item" v-for="itemList in list" :key="itemList.id">
         
          <img :src="itemList.img"/>
          <span>{{itemList.people}}</span>
          <ul class="picList">
              <div class="city">
            <li v-for="item in itemList.location" :key="item.cityName" >
               <i>{{item.cityName}}</i>
          </li>
          </div>
          <div  class="title">
          <li v-for="listItem in itemList.title" :key="listItem.titleName">
          #{{listItem.titleName}}
          </li>
          </div>
          </ul>
          <button @click="btnAction" class="go">GO>></button>
         </div>
         </div>
          <router-view/>
         </div>
        
</template>

<script>
import { Icon } from 'vant';
import Vue from 'vue';
Vue.use(Icon);
import {getRegimentData} from '../../services/homeService';
export default {
    data(){
        return{
            img1:'',
            list:[]
        }
    },
    created(){
        getRegimentData().then(data=>{
            this.img1=data.img1;
            this.list=data.num2;
            console.log(this.list);
        })
    },
    methods:{
        back(){
            this.$router.back()
        },
        btnAction(){
            this.$router.push('regimentPeople');
            console.log('点击了');
        }
    }
}
</script>

<style lang="scss" scoped>

.group{
    background-color: #ffffff;
    display: block;
    width: 100%;
    position: relative;
    left: 0;
    top: 0;
    overflow: hidden;
     .header{
        position: absolute;
    top: 0;
    left: 0;
    height: 44px;
    
span{
    position: absolute;
    left: 0.4rem;
    top: 0.1rem;
    font-size: 0.24rem;
}
}
    h1{
        text-align: center;
        width: 100%;
        height:0.44rem;
        line-height: 0.44rem;
        overflow: hidden; 
        font-size: 0.18rem;
        font-weight: normal;
    }
}
    .banner{
    
    width: 3rem;
    height: 2rem;
    position: relative;
    top: 0px;
    left: 0.4rem;
}
.content{
    display: flex;
    margin-top: 0.2rem;
    justify-content: space-around;
    flex: 1;
    flex-wrap: wrap;
}
.picList-item{
    margin-bottom: 0.2rem;
    width:40%;
    position: relative;
    img{
       width: 1.5rem;
       height: 1.1rem; 
    }
    span{
        position: absolute;
        top: 0;
        left: 0;
        width: 0.6rem;
        height: 0.2rem;
        background-color: #f9d080;
    }
    ul{
        .city{
            width: 1rem;
            height: 1rem;
            position: absolute ;
            top: 0.15rem;
            left: 0.2rem;
            float: left;
            overflow: hidden;
            li{
             float: left;
             padding: 0.04rem;
            i{
                font-style: normal;
                display: inline-block;
                color: #ffffff;
                font-size: 0.20rem;
            }
    }
        }
    
    }
    .title{
        width: 100%;
        height: 0.3rem;
        display: flex;

        li{
            flex: 1;
            display: block;
            float: left;
            font-style: normal;
            font-size: 0.08rem;
            color:#999;
            line-height: 0.3rem;
        }
    }
    .go{
                width: 100%;
                height: 0.27rem;
                background-color: #7989e8;
                text-align: center;
                line-height: 0.27rem;
                color: #ffffff;
                border: none;
            }
}

</style>

