<template>
    <div id="my">
        <div class="personal">
            <div class="person">
                <div>
                    <h1>杜子腾</h1>
                    <img src="/icon/huiyuanka.svg" />
                </div> 
                <span>ID:9999999</span>
                <p>编辑个人信息 ></p>
            </div>
            <div class="avatar">
                <img src="/icon/xiangce.svg" />
            </div>
        </div>
        <div class="center">
            <b>加入time卡会员 全场预定5折起</b>
            <a href="">查看特权 ></a>
            <div class="card">
                <div class="quan">
                    <span>0</span>
                    <i @click="cardAction">卡券</i>
                </div>
                <div class="collection">
                     <span>0</span>
                    <i>收藏</i>
                </div>
            </div>
        </div>
        <div class="order">
            <div class="top">
                <span>我的订单</span>
                <p>查看全部订单</p>
            </div>
            <ul>
                <li>
                    <img src="/icon/daifukuan.svg"/>
                    <span>待付款</span>
                </li>
                <li>
                    <img src="/icon/chulizhong.svg" />
                    <span>处理中</span>
                </li>
                <li>
                    <img src="/icon/yijiedan.svg" />
                    <span>已接单</span>
                </li>
                <li>
                    <img src="/icon/yiwancheng.svg"/>
                    <span>已完成</span>
                </li>
            </ul>
            <div class="more">
                <img src="/icon/shezhi.svg" />
                <span>更多</span>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
  methods:{
    cardAction(){
      this.$router.push({
        path:'/mine/mycard'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#my {
  // z-index: 1;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0.49rem;
  width: 100%;
  height: 100%;
  .personal {
    width: 100%;
    height: 2.32rem;
    background: #3d4753;
    display: flex;
    color: white;
    .person {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-top: 0.5rem;
      padding-left: 0.2rem;
      div {
        display: flex;
        h1{
            font-weight: normal;
            font-size: 0.20rem;
        }
        img {
          padding-left: 0.2rem;
        }
      }
      span {
        margin-top: 0.05rem;
      }
      p {
        width: 1.2rem;
        height: 0.2rem;
        background: black;
        border-radius: 0.1rem;
        text-align: center;
        line-height: 0.2rem;
        margin-top: 0.05rem;
      }
    }
    .avatar {
      position: absolute;
      top: 0.5rem;
      right: 0.2rem;
      img {
        border-radius: 50%;
        width: 0.6rem;
        height: 0.6rem;
      }
    }
  }
  .center {
    position: absolute;
    left: 0.2rem;
    top: 1.42rem;
    height: 1.225rem;
    width: 90%;
    background: #4c6a6b;
    border-radius: 0.08rem;
    b {
      font-weight: normal;
      color: #bba16b;
      display: inline-block;
      margin: 0.05rem;
    }
    a {
      color: white;
      float: right;
      margin-right: 0.05rem;
      margin-top: 0.05rem;
    }
    .card {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 0.88rem;
      width: 100%;
      background: white;
      display: flex;
      justify-content: space-around;
    //   align-items: center;
      border-radius: 0.05rem;
      i{
          font-style: normal;
          color: #999;
      }
      .quan{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
      }
      .collection{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
      }
    
    }
  }
  .order{
      width: 100%;
      margin-top: 0.75rem;
      .top{
          display: flex;
          justify-content: space-around;
           color:#666;
      }
      ul{
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 0.45rem;
          margin-bottom: 0.3rem;
      }
      .more{
          margin-left: 0.24rem;
          img{
            //   width: 0.23rem;
            //   height: 0.2rem;
              float: left;
          }
          span{
             float: left;
              height: 0.2rem;
              line-height: 0.2rem;
              margin-left: 0.22rem;
          }
      }
  }
}
</style>

