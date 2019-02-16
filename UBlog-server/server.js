const express = require('express'); //引入express
const url = require('url')
const api = require('./api/index');
const http = require('http');
const fs = require('fs');
const {
    mock,
    Random
} = require('mockjs');
const server = express(); //开启服务器


//首页轮播图数据
server.get('/api/home/banner', (req, res) => { 
    console.log('得到请求');
    console.log(req.url)
    var data = mock({
        'num1|3': [{
            'id|+1': 0,
            img: "@image('375x200','@color()')"
        }]
    })
    var arr = ['团建', '亲子主题房', '发现好去处'];
    for (var i = 0; i < arr.length; i++) {
        (function (i) {
            data.num1[i].name = arr[i];
            console.log(arr[i])
        })(i);
    }
    res.json({ //发送json数据
        message: 'ok',
        status: 0,
        data: data
    });
})



//首页团建
server.get(api.REGIMENT_SUBJECT,(req,res)=>{
    //let {id} = url.parse(req.url, true).query;
    // if(!id){
    //     res.json({
    //         status: 1,
    //         message: '缺少参数',
    //         data: null
    //     });
    //     return;
    // }
    // if(id==0||id==1){
 var data = mock({
    img1: "@image('300x200','@color()')",
   'num2|4': [{ 
        'id|+1': 0,
        img: "@image('150x110','@color()')",
       'location|1-4': [{
            cityName() {
                let result = Random.city();
                if (result.endsWith('市')) {
                    var arr = result.split('');
                    arr.splice(arr.length - 1, 1);
                    result = arr.join('');
                }
                return result;
            }
        }],
        'title|2-4':[{
           titleName(){
               let tit = Random.ctitle( 2, 4 );
               return tit
           }
        }],
        'people|1': ['10-20人', '40-20人', '10-25人', '20-30人', '15-30人', '25-35人', '1-5人','10-20人', '40-20人', '10-25人', '20-30人', '15-30人', '25-35人', '1-5人'],
    }]
  })
        res.json({
            message: 'ok',
            status: 0,
            data:data
        })
    // }
 
})

//10-20人

server.get(api.PEOPLE_DATA,(req,res)=>{
var data=mock({
    'people|3':[{
        'id|+1':0,
        img:"@image('300x200','@color()')",
        tic1:'Time特权',
        tic2:'会员商户',
        "price|300-900": 900,
         'name|1':[{
              hotelName(){
                  let hotel =Random.ctitle(5,9)+'店';
                  return hotel;
              }
         }],
        'title|2-4':[{
            titleName(){
                let tit = Random.ctitle( 2, 4 );
                return tit
            }
         }],
    }]
})
res.json({ //发送json数据
    message: 'ok',
    status: 0,
    data: data
});
})

//发现
server.get('/api/home/discover',(req,res)=>{
    
    var data = mock({
        img1: "@image('300x200','@color()')",
        'num3|5': [{
            'id|+1': 0,
           'location|7': [{
                cityName() {
                    let result =Random.city();
                    if(result.length>=5){
                        result =Random.city();
                    }
                    if (result.endsWith('市')) {
                        var arr = result.split('');
                        arr.splice(arr.length - 1, 1);
                        result = arr.join('');
                    }
                    return result;
                },
                'cityid|+1': 0,
            }],
        }]
      })
      var arr = ['浙江', '江苏上海', '四川云南','贵州两广','福建其他'];
    for (var i = 0; i < arr.length; i++) {
        (function (i) {
            data.num3[i].city = arr[i];
            data.num3[i].location.push({cityName:"更多",cityid:'10000'})
        })(i);
    } 
    res.json({
        message: 'ok',
        status: 0,
        data:data
    })
})


server.listen(9090, 'localhost', (error) => {
    if (error) {
        console.log('启动失败');
    } else {
        console.log('启动成功');
    }
})