<template>
    <div id="all">
    <span @click="sendAction" :class="{active:active}">所有卡券 <i v-if="isShow"><img src="/icon/zhengsanjiao.svg"/></i></span>
    <ul class="content" v-if="isShow">
        <li v-for="item in tabList" class="tab"  :key="item.id">{{item.title}}</li>
    </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      active: false,
      tabList: [
        { id: 0, title: "所有卡券", comName: "quan" },
        { id: 1, title: "已启用", comName: "Already" },
        { id: 2, title: "未启用", comName: "Never" },
        { id: 3, title: "即将到期", comName: "Quickly" }
      ],
      pageName: "quan"
    };
  },
  methods: {
    sendAction() {
      this.isShow = !this.isShow;
      if (this.isShow == false) {
        this.active = false;
      } else {
        this.active = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#all {
  width: 100%;
  position: absolute;
  left: 0;
  top: 1.0rem;
  bottom: 0;
  background: white;
  span {
    font-size: 0.14rem;
    font-weight: bold;
    background: #fafafa;
    padding: 0.05rem 0.1rem;
    i{
        position: absolute;
        left: 1.0rem;
        top: 0.05rem;
    }
  }
  .active {
    color: red;
  }
  .content {
    width: 100%;
    li {
      height: 0.4rem;
      text-align: center;
      line-height: 0.4rem;
      font-size: 0.14rem;
      font-weight: bold;
    }
  }
}
</style>

