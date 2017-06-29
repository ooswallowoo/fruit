<template>
  <div class="item">
    <div class="media">
      <img class='media-img' src='../assets/images/pear.jpg' />
    </div>
    <div class="media-right">
       <p class="row">名称：{{fruitData.name}}</p>
      <p class="row">重量：{{fruitData.weight}}公斤</p>
      <p class="row">下单时间：{{fruitData.produceTime | fmtDate}}</p>
      <div class="operation">
        <a class="btn" @click="alertTime(fruitData.produceTime)" href="javascript:void(0)">显示创建时间</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pear',
  props: ['fruitData'],
  data () {
    return {
      msg: '梨'
    }
  },
   methods: {
     /* 显示时间按钮执行函数 */
    alertTime: function (time) {
      const that = this
      that.$layer.toast({
        icon: 'icon-check',
        content: '我的创建时间是：' + that.pattern(time),
        time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
