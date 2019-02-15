<template>
    <div class="information">
        <div class="my-information">
            <h2>
                <van-icon name="arrow-left" @click="mine" />
                <p>个人信息</p>
            </h2>
            <div class="information-main">
                <li>
                    头像
                    <span @click="gaitouxiang">
                        <img src="/icon/xiangce.svg" alt="">
                        <van-icon name="arrow"/>
                    </span>
                </li>
                <li>
                    姓名
                    <span>杜子腾</span>
                </li>
                <li>
                    电话号码
                    <span>19909998899<van-icon name="arrow"/></span>

                </li>
                <li>
                    昵称
                    <span>你的小心心<van-icon name="arrow"/></span>

                </li>
                <li>
                    交易密码
                    <van-icon name="arrow"/>

                </li>
                <li>
                    身份信息
                    <van-icon name="arrow"/>
                </li>
            </div>
        </div>
        <div class="xiugai">

        </div>
    </div>
</template>

<script>
export default {
    methods: {
        mine(){
            this.$router.back();
        },
        gaitouxiang(){
            this.$router.push({path: '/mine/gaitouxaing'})
        }
    }
}
</script>

<style lang="scss" scoped>
.information{
    .my-information{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: 2;
        h2{
            width: 100%;
            height: 0.36rem;
            line-height: 0.36rem;
            padding: 0 0.1rem;
            box-sizing: border-box;
            margin: 0.1rem 0;
            i{
                color: #4a4a4a;
                font-size: 0.24rem;
                padding-top: 0.07rem;
                float: left;
                display: block;
            }
            p{
                width: 80%;
                font-size: 0.22rem;
                font-weight: 600;
                text-align: center;
            }
        }
        .information-main{
            padding: 0 0.15rem;
            border-top: 1px solid #E2E2E2;
            li{
                width: 100%;
                height: 0.5rem;
                line-height: 0.5rem;
                color: #333;
                font-size: 0.06rem;
                span{
                    width: 15%;
                    padding-top: 0.12rem;
                    display: block;
                    float: right;
                    img{
                        float: left;
                        border: 1px solid #f3f3f3;
                        border-radius: 50%;
                    }
                    i{
                        height: 100%;
                        padding-top: 0.05rem;
                        display: block;
                        float: right;
                    }
                }
            }
            li:nth-of-type(2){
                span{
                    text-align: right;
                    padding: 0;
                }
            }
            li:nth-of-type(3){
                span{
                    width: 60%;
                    text-align: right;
                    padding: 0;
                    i{
                        padding: 0.18rem 0 0 0.1rem;
                    }
                }
            }
            li:nth-of-type(4){
                span{
                    width: 60%;
                    text-align: right;
                    padding: 0;
                    i{
                        padding: 0.18rem 0 0 0.1rem;
                    }
                }
            }
            li:nth-of-type(5){
                i{
                    display: block;
                    float: right;
                    padding: 0.18rem 0 0 0.1rem;
                }
            }
            li:nth-of-type(6){
                i{
                    display: block;
                    float: right;
                    padding: 0.18rem 0 0 0.1rem;
                }
            }
        }
    }
}
</style>

