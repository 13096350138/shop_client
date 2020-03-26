/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

//返回goods（商品列表）的接口
Mock.mock('/goods',{code:0,data:data.goods})
//返回ratings（评价）的接口
Mock.mock('/ratings',{code:0,data:data.ratings})
//返回info（商家信息）的接口
Mock.mock('/info',{code:0,data:data.info})

//  export default  xxx         不需要向外暴露任何数据，只需要保证能执行即可