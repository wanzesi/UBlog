import API from '../api'
import { FetchGet, FetchPost } from '../common/fetch'

//请求首页轮播图数据
export function getHomeBanner() {
    return new Promise((resolve, reject) => {
      FetchGet('/api/home/banner')
        .then((data) => {
          console.log(data);
          resolve(data)
        })
    })
      
  }


  //发现好去处数据
  export function getDiscoverData(){
    return new Promise((resolve,reject)=>{
        FetchGet(API.DISCOVER)
        .then(data=>{
          console.log(data);
          resolve({
              img1:data.img1,
              num:data.num3.map((item=>{
                  return{
                      id:item.id,
                      city:item.city,
                      location:item.location.map((list)=>{
                          return{
                              cityid:list.cityid,
                              cityName:list.cityName
                          }
                      })
                  }

              }))
          })
        })
    })
}


//请求首页团建数据
export function getRegimentData(){
  return new Promise((resolve,reject)=>{
      FetchGet(API.REGIMENT_SUBJECT)
      .then(data=>{
          console.log(data);
          resolve({
              img1:data.img1,
              num2:data.num2.map((item)=>{
                  return{
                      id:item.id,
                      img:item.img,
                      location:item.location.map((list=>{
                          return{
                              cityName:list.cityName
                          }
                      })),
                      title:item.title.map(listItem=>{
                          return{
                              titleName:listItem.titleName
                          }
                      }),
                      people:item.people
                  }
              })
          })
      })
  })
}
//请求团建10-20人
export function getPeopleData(){
  return new Promise((resolve,reject)=>{
      FetchGet(API.PEOPLE_DATA)
      .then(data=>{
          console.log(data); 
              let newData=data.people.map(item=>{
                  return{
                      id:item.id,
                      img:item.img,
                      tic1:item.tic1,
                      tic2:item.tic2,
                      price:item.price,
                      name:item.name.hotelName,
                      title:item.title.map(listItem=>{
                            return{
                              titleName:listItem.titleName
                            }
                      })
                  }
              })
              resolve(newData);
      })
  })
}
