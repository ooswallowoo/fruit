<template>
  <div class="list">
      <div class="header">
        <a @click="addApple" class="btn add-btn" href="javascript:void(0)">添加苹果</a>
        <a @click="addBanana" class="btn add-btn" href="javascript:void(0)">添加香蕉</a>
        <a @click="addPear" class="btn add-btn" href="javascript:void(0)">添加梨</a>
        <p class="total">列表长度：{{list.length}}</p>
      </div>
      
      <ul id="fruit" v-if="list.length > 0">
        <li v-for="fruit in list" class="fruit-item clearfix">
            <div v-if="fruit.type === 1">
                <apple v-bind:fruitData='fruit' v-on:addPearFromChild='addPearFromChild'></apple>
            </div>
            <div v-else-if="fruit.type === 2">
                <banana v-bind:fruitData='fruit'></banana>
            </div>
            <div v-else-if="fruit.type === 3">
                <pear v-bind:fruitData='fruit'></pear>
            </div>
        </li>
      </ul>
  </div>
</template>

<script>
import Apple from '../../components/apple'
import Banana from '../../components/banana'
import Pear from '../../components/pear'
export default {
  name: 'list',
  data () {
    return {
      list:[]
    }
  },
  components:{
    Apple,
    Banana,
    Pear
  },
  created: function () {
    /* 在页面dom不可见时读取数据并赋值给本页面list */
    let fruits = require('../../mock/fruit.json')
    this.list = fruits.fruit
    console.log(this.list)
  },
  watch: {
    /* 监听list */
  },
  methods: {
    /* 添加苹果函数' */
    addApple: function () {
      this.addFruit({type: 1, name: '红富士苹果'})
    },
    /* 添加香蕉函数' */
    addBanana: function () {
      this.addFruit({type: 2, name: '千层蕉香蕉'})
    },
    /* 添加梨函数' */
    addPear: function () {
      this.addFruit({type: 3, name: '雪花梨'})
    },
    /* 添加水果函数' */
    addFruit: function (data) {
      let fruit = {
        type: data.type,
        name: data.name,
        weight: parseInt(Math.random()*10),
        produceTime: new Date()
      }
      this.list.push(fruit)
      console.log(fruit)
    },
    /* 通过苹果组件添加梨函数' */
    addPearFromChild: function () {
      this.addFruit({type: 3, name: '梨'})
      this.$layer.toast({
        icon: 'icon-check',
        content: '我是通过苹果组件创建的梨',
        time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#fruit{
  font-weight: normal;
  margin:30px 20px 20px;
}
#fruit li{
    display: block;
    text-align: left;
    border-top:1px dotted #ddd;
    padding:15px 0;
}
.header{position:relative;background-color:#fff;text-align:right;position:fixed;top:0;width:100%;left:0px;z-index:100;border-bottom:1px solid #ddd;height:50px;line-height:50px;}
.add-btn{background: url(../../assets/images/add-btn.png) no-repeat 7px center #e9e9e9;height:15px;padding-left:21px;font-size:12px;border:1px solid #d0d0d0;color:#333;border-radius:20px;}
.total{text-align:right;padding:0 15px;position:absolute;top:0px;left:15px;z-index:999;}

</style>
