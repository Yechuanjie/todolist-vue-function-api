<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <div class="content">
      <button @click="increment">count--</button>
      <div class="inner">
        <div class="txt">当前的count：{{ count }}</div>
        <div class="txt">{{ computedValue }}</div>
      </div>
      <button @click="add">count++</button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  reactive,
  createComponent,
  onMounted,
  watch,
  computed
} from '@vue/composition-api'
interface Props {
  msg: string
}
export default createComponent<Props>({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup(props) {
    // reactive state by ref
    const count = ref(0)
    // or reactive state
    const state = reactive({
      count: 0
    })
    // computed state
    const computedValue = computed(() => `计算属性的值: ${count.value * 100}`)
    // method
    const add = () => count.value++
    // method
    const increment = () => count.value--
    // 监听数据改变
    // watch的目的是监听某些变量改变后执行逻辑
    watch(
      () => count.value,
      val => {
        console.info(`当前count ${val}`)
        // todo something
      }
    )
    // mounted
    onMounted(() => console.info(`mounted`))
    return {
      count,
      state,
      computedValue,
      add,
      increment
    }
  }
})
</script>

<style scoped>
button {
  width: 100px;
  height: 40px;
  font-size: 18px;
}
span {
  margin: 0 30px;
  font-size: 18px;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.inner {
  width: 200px;
  display: inline-block;
  margin: 20px 0;
}
.txt + .txt {
  margin-top: 15px;
}
</style>
