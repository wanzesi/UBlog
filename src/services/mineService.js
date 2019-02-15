import API from '../api'
import {FetchGet,FetchPost} from '../common/fetch'

// 请求我的订单数据
export function getMyorder(){
    return new Promise((resolve,reject)=>{
        FetchGet(API.MYORDER)
        .then((data)=>{
                resolve(data);
            }
        )
    })
}


// 请求会员权益数据
export function getMembership(){
    return new Promise((resolve,reject)=>{
        FetchGet(API.MEMBERSHIP)
        .then((data)=>{
                resolve(data);
            }
        )
    })
}