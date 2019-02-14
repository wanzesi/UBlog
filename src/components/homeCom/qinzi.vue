<template>
    <div id="qinzi" class="page">
        <h1>亲子</h1>
        <button @click="tuihui">返回</button>
    </div>
</template>

<script>
export default {
   methods:{
       tuihui(){
           this.$router.back();
       }
   }
}
</script>

<style lang="scss" scoped>
   #qinzi{
       position: absolute;
       left: 0;
       right: 0;
       top: 0;
       bottom: 0;
       z-index: 1;
       background: #fff;
   }
</style>
