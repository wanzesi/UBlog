<template>
  <div class="discover">
    <div class="header" @click="back">
      <span>
        <van-icon name="arrow-left"/>
      </span>
        <h1>发现去好处</h1>
    </div>
   <div>
      <img :src="img1" class="banner">
    </div> 
    <div class="time">
      <div class="left">
        <p>入住日期</p>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
      </div>
      <div class="day">{{day}}</div>
      <div class="right">
        <p>离店日期</p>
        <el-date-picker v-model="value2" type="date" placeholder="选择日期"></el-date-picker>
      </div>
    </div>
    
    <div class="content"  v-for="(cityItem,index) in cityList" :key="cityItem.id" @click="changeAction(index)" :class="{active:selectIndex===index}">
        <div class="city"> 
        <span>{{cityItem.city}}</span>
        </div>
        <ul>
            <div class="citys">
            <li v-for="(city,index) in cityItem.location" :key="city.cityid" :class="{active:cityIndex==index}">{{city.cityName}}</li>
            </div>
        </ul>
    </div>
  </div>
</template>

<script>
import { getDiscoverData, getPeopleData } from "../../services/homeService";
import index from '../../api';
export default {
  data() {
    return {
      img1: "",
      value1: new Date(),
      value2: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      cityList:[],
      selectIndex:0,
      cityIndex:0
    };
  },
  created() {
    getDiscoverData().then(data => {
      this.img1 = data.img1;
      this.cityList = data.num;
      console.log(data);
    });
  },
  methods: {
    back() {
      this.$router.back();
    },
    changeAction(index){
            this.selectIndex==index;
        console.log('点击了')
    }
  },
  computed: {
    day() {
      let day =
        (this.value2.getTime() - this.value1.getTime()) / (24 * 3600 * 1000);
      if ((Math.floor(day) ==0)) {
        return "请选择";
      }
      if (Math.floor(day) < 0) {
        this.value2 = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      }
      return (
        "住" +
        Math.floor(
          (this.value2.getTime() - this.value1.getTime()) / (24 * 3600 * 1000)
        ) +
        "晚"
      );
      
    }
  }
};
</script>

<style lang="scss" scoped>
.discover {
  display: block;
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
  overflow: hidden;
  background: #fff;
  .header {
    position: absolute;
    top: 0;
    left: 0;
    height: 44px;

    span {
      position: absolute;
      left: 0.4rem;
      top: 0.1rem;
      font-size: 0.24rem;
    }
  }
  h1 {
    text-align: center;
    width: 100%;
    height: 0.44rem;
    line-height: 0.44rem;
    overflow: hidden;
    font-size: 0.18rem;
    font-weight: normal;
  }
}
.banner {
  width: 100%;
  // width: 3rem;
  // height: 2rem;
  position: relative;
  top: 0px;
}
.time{
    width: 90%;
    height: 0.6rem;
    border-radius: 0.08rem;
    border-bottom: 1px solid #666;
    margin: 0 auto;
    margin-top: 0.2rem;
    p{
           text-align: center;
           color: #999;
       }
    .el-date-editor{
        width: 100% !important;
    }
    .left{
        width: 40%;
        float: left;
    }
    .right{
        width: 40%;
        float: right;
    }
   .day{
       float: left;
       height: 0.6rem;
       line-height: 0.6rem;
       text-align: center;
       width:18%;
   }
}
.city{
       width: 100%;
       display: flex;
       padding: 0.1rem 0;
       box-sizing: border-box;
       color: #3b3b3b;
       font-size: 0.14rem;
       font-weight: 600;
       justify-content: space-around;
       span.active{
           padding-bottom: 0.05rem;
           border-bottom: 1px solid salmon;
       }
}
</style>

