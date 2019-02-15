<template>
    <div class="tab-list">
        <div class="header" @click="back">
      <span>
        <van-icon name="arrow-left"/>
      </span></div>
        <h1>我的卡券</h1>
    <ul>
      <li v-for="list in tabList" :class="{active:pageName==list.item} " :key="list.id" @click="tabAction(list.item)">{{list.name}}</li>
    </ul>
    <ALL v-if="isShow"/>
    <router-view/>
    </div>
</template>

<script>
import ALL from './allCard'; 
export default {
  components:{
    ALL
  },
  data(){
    return{
      tabList:[
        {id:0,name:'礼券',item:"quan"},
        {id:1,name:'会员卡',item:"member"},
        {id:2,name:'套餐卡',item:"set"},
        {id:3,name:'历史',item:"history"}
      ],
      pageName:'quan',
      isShow:true
    }
  },
methods:{
  back(){
    this.$router.back()
  },
  tabAction(title){
    this.pageName=title;
    if(this.pageName=='quan'){
      this.isShow=true
    }
    else{
      this.isShow=false
    }
  }
}
}
</script>

<style lang="scss" scoped>
.tab-list{
  // z-index: 0;
    display: block;
  width: 100%;
  height: 100%;
  position: absolute;
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

  ul {
  width: 100%;
  height: 0.44rem;
  display: flex;
  position: absolute;
  left: 0;
  top: 0.44rem;
  z-index: 1;
  background: white;
  li {
    flex: 1;
    text-align: center;
    line-height: 0.44rem;
    font-size: 0.14rem;
  }
  .active {
    color: red;
    border-bottom: 1px solid red;
  }
}
}
</style>

