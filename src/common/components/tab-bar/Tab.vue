<template>
 <router-link class="tab" :to="info.path">
     <div>
         <img :src="info.src" :style="style">
     </div>
     <span>{{info.title}}</span>
 </router-link>
</template>

<script>
export default {
    name: 'tab-item',
    props: ['info'],
   
    computed: {
        style(){
            let offset = this.info.index * (-61.7);
            if(this.$route.path !== this.info.path){
                offset -= 32;
            }
            return{
                transform: `translateY(${offset}px)`
            }
        }
    },
    watch: {
        '$route': function(){
            // console.log(this.$route.path);
            // console.log(this.info.path);
        }
    }
}
</script>

<style>
.tab.active{
    color: #00a1ff;
}
.tab{
    text-align: center;
    flex: 1;
    list-style: none;
}
.tab div{
    display: block;
    width: 26px;
    height: 30.5px;
    overflow: hidden;
    margin: 0 auto;
    padding-top: 4px;
}
.tab div img{
    width: 100%;
    /* transform: translateY(-61px); */
}
.tab.router-link-active div img{
    
}
.tab span{
    display: block;
    font-size: 12px;
}
</style>
