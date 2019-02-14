<template>
  <div class="contain">
  <div class="page" id="home">
    <div class="header">
      <div class="saoyisao">
        <van-icon name="scan" class="fdj"/>
        <span>扫一扫</span>
      </div>
      <p>
        <van-icon name="search" class="fdj"/>搜索目的地或酒店
      </p>
    </div>
    <scroller :top="60" :bottom="49">
      <van-swipe :autoplay="3000" indicator-color="white">
        
        <van-swipe-item class="banner">
          <img src="../../../public/img/fengxiangbiao.png"  @click="goTuanjian" >
        </van-swipe-item>
        <van-swipe-item class="banner">
            <img src="../../../public/img/baobao.png" @click="goQinzi" >
        </van-swipe-item>
        <van-swipe-item class="banner">
          <img src="../../../public/img/discover.png" @click="goFaxian" >
        </van-swipe-item>
      </van-swipe>
    </scroller>
  </div>
  <router-view/>
  </div>
</template>

<script>
import { getHomeBanner } from "../../services/homeService";
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      img1: "",
      list: []
    };
  },
  methods: {
     goTuanjian(){
        console.log(this.$router);
        this.$router.push('/home/tuanjian');
     },
     goQinzi(){
        this.$router.push('/home/qinzi');
     },
     goFaxian(){
        this.$router.push('/home/faxian');
     }    
     
  },
  created() {
    getHomeBanner().then(data => {
      this.img1 = data.img1;
      this.list = data.num2;
      console.log(data);
    });
  }

};
</script>



<style lang="scss" scoped>
#home {
  .header {
    width: 100%;
    height: 44px;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    padding: 10px 10px;
    box-sizing: border-box;
    .saoyisao {
      display: flex;
      flex-direction: column;
      .fdj {
        font-size: 18px;
        text-align: center;
      }
    }
    p {
      line-height: 30px;
      height: 30px;
      font-size: 12px;
      padding: 2px 30px;
      background: #ededed;
      color: #666;
      border-radius: 4px;
      margin: 0 8px;
      flex: 1;
       .fdj{
           font-size: 16px;
           transform: translateY(3px);
           margin-right: 8px;
       }
    }
    span {
      color: #b4282d;
      // border: 1px solid #b4282d;
      border-radius: 2px;
      font-size: 12px;
      line-height: 8px;
    }
  }
  .banner img {
    width: 100%;
    height: 200px;
    float: left;
  }
}
</style>

