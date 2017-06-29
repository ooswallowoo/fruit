<template>
  <div class="item">
    <div class="media">
      <img class='media-img' src='../assets/images/banana.jpg' />
    </div>
    <div class="media-right">
      <p class="row">名称：{{fruitData.name}}</p>
      <p class="row">重量：{{fruitData.weight}}公斤</p>
      <p class="row">下单时间：{{fruitData.produceTime | fmtDate}}</p>
      <div class="operation">
        <a class="btn" @click="alertWeight(fruitData.weight)" href="javascript:void(0)">显示重量</a>
        <a class="btn" @click="alertName(fruitData.name)" href="javascript:void(0)">显示名称</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banana',
  props: ['fruitData'],
  data () {
    return {
      msg: '香蕉'
    }
  },
  methods: {
    /* 显示重量按钮执行函数 */
    alertWeight: function (weight) {
      this.$layer.toast({
        icon: 'icon-check',
        content: '我的重量是：' + weight + ' 公斤',
        time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
      })
    },
    /* 显示名称按钮执行函数 */
    alertName: function (name) {
      this.$layer.toast({
        icon: 'icon-check',
        content: '我是水果之王：《' + name + '》',
        time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
