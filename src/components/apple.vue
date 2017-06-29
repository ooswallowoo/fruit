<template>
  <div class="item">
    <div class="media">
      <img class='media-img' src='../assets/images/apple.jpg' />
    </div>
    <div class="media-right">
      <p class="row">名称：{{fruitData.name}}</p>
      <p class="row">重量：{{fruitData.weight}}公斤</p>
      <p class="row">下单时间：{{fruitData.produceTime | fmtDate}}</p>
      <div class="operation">
        <a class="btn" @click="alertName(fruitData.name)" href="javascript:void(0)">显示名称</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'apple',
  props: ['fruitData'],
  data () {
    return {
      msg: '苹果'
    }
  },
  methods: {
    /* 显示名称按钮执行函数 */
    alertName: function (name) {
      const that = this
      that.$layer.dialog({
      title: ['这是标题', 'background:#af8f10;color:#fff'], // 第一个是标题内容  第二个是标题栏的style(可以为空)
      content: '吃<' + name + '>可以减肥，您要再创建一个<梨>吗?',
      contentClass: 'className',
      btn: ['创建','取消']
    })
    // 如果有btn
    .then(function (res){
      if (res === 0) {
        that.$emit('addPearFromChild', true)
      } else {
      }
    })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
