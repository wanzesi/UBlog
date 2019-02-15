<template>
<div class="content">
    <div class="people">
        <div class="header" @click="back">
        <span><van-icon name="arrow-left" /></span>
           <h1>10-20人</h1></div>
        <scroller :bottom="49" :top="44">
       <people/>
           </scroller>
        <router-view/>
    </div>
    </div>
</template>

<script>
import people from '../../components/homeCom/people'
export default {
    components:{
        people
    },
methods:{
    back(){
            this.$router.back()
        }
}
}
</script>

<style lang="scss" scoped>
.content{
    background: #ffffff;

.people{
    z-index: 1;
    width: 100%;
    height: 100%;
    background: #ffffff;
    .header{
        background: #ffffff;
        position: relative;
    top: 0;
    left: 0;
    height: 44px;
    scroller{
        background: #ffffff;
    }
span{
    position: absolute;
    left: 0.4rem;
    top: 0.1rem;
    font-size: 0.24rem;
}
}
h1{
    text-align: center;
    line-height: 44px;
    font-weight: normal;
    font-size: 0.18rem;
}
}
}
</style>

