<template>
    <div id="search">
      <header class="header">
        <p>
            <van-icon name="search" class="fdj"/>
            <img src="/icon/guanbi.svg">
        </p>
        <span @click="back">取消</span>
      </header>

      <div class="jilu">
          <ul>
              <li v-for="(item, index) in tabList"
               :key="item.id"
                :class="{active: selectIndex === index}"
                 @click="sendAction(item.id, index, item.bool)" >
                 
                 {{item.name}}
             </li>
          </ul>
          <!-- <Shoper/> -->
        <div class="shop" v-if="flag">
           <span>历史记录</span>
           <span>全部删除</span>            
        </div>
        <div class="address" v-else>
            <h1>地区</h1>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            flag: true,
            selectIndex: 0,
            id: 0,
            tabList: [
                {id: 0, name: '商户', bool: true},
                {id: 1, name: '地区', bool: false}
            ]
        }
    },
  methods: {
      back(){
          this.$router.back();
      },
      sendAction(id, index, bool, index1){
         this.selectIndex = index;
         this.id = id;
        //  console.log(bool);
         this.flag = bool;
        
      }
  }
}
</script>

<style lang="scss" scoped>
#search{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: #FCFCFC;
   .header{
       display: flex;
       width: 100%;
       height: 0.3rem;
       padding: 0.1rem;
       box-sizing: border-box;
       p{
       width: 3rem;
       height: 0.3rem;
       background: #F0F0F0;
       border-radius: 5px;
       padding: 0.06rem 0.1rem;
       box-sizing: border-box;
       .fdj{
           font-size: 0.2rem;
           color: #8F8F94;
       }
       img{
           display: inline-block;
           margin-left: 2.4rem;
           transform: translateY(-0.03rem);
       }
       }
       span{
           margin-left: 0.2rem;
           margin-top: 0.06rem;
           color: #A9A9A9;
       }
   }
   .jilu{
       margin-top: 0.1rem;
       ul{
         display: flex;
         justify-content: space-around;
         height: 0.4rem;
         line-height: 0.4rem;
         border-bottom: 1px solid #eee;
         li{
             color: #B6B6B6;
             font-weight: 500;
         }
       .active {
        color: #000;
        border-bottom: 1px solid red;
    }
    }
       .shop{
           padding: 0.1rem 0.15rem;
           span:nth-of-type(1){
               color: #000;
               float: left;
               font-weight: bold;
           }
           span:nth-of-type(2){
               color: #000;
               float: right;
               font-weight: bold;
           }
       }
   }
}
</style>
