<template>
  <div id="app">
    <router-view/>
        <tab-bar>
            <tab-item v-for="tabItem in tabList" :key="tabItem.title" :info="tabItem">

            </tab-item>
           
        </tab-bar>
  </div>
</template>
<script>


  export default {
    data(){
      return {
        tabList:[
          { title: '精选', path: '/home'},
          { title: '我的', path: '/mine'}
            
          
        ]
      }  
    }
  }
</script>
   
<style lang="scss" scoped>

</style>
