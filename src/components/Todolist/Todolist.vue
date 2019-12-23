<template>
  <div class="todo-list">
    <div class="head">
      <div class="inner">
        <div class="todo">
          <img class="icon" alt="Todo logo" src="../../assets/logo.png" />
          <span class="title">Todo List</span>
        </div>
        <input
          type="text"
          autofocus="true"
          placeholder="Waht needs to be done?"
          @keyup.enter="confirm"
        />
      </div>
    </div>
    <div class="list">
      <p>正在进行</p>
      <div class="todo-item-list">
        <div class="todo-item" v-for="(item, index) in todoList" :key="item.id">
          <div class="icon">
            <img class="right-un" src="../../assets/right-un.png" alt="" />
            <img
              class="right-sel"
              @click="finish(item, index)"
              src="../../assets/right-sel.png"
            />
          </div>
          <span>{{ item.title }}</span>
          <img
            class="delete"
            @click="deleteItem('todo', index)"
            src="../../assets/delete.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="list">
      <p>已经完成</p>
      <div class="todo-item-list">
        <div
          class="todo-item"
          v-for="(item, index) in completeList"
          :key="item.id"
        >
          <div class="blank" />
          <span>{{ item.title }}</span>
          <img
            class="delete"
            @click="deleteItem('complete', index)"
            src="../../assets/delete.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, createComponent } from '@vue/composition-api'
interface TodoItem {
  createTime: Date
  title: string
}

const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}
const getStorage = (key: string): Array<TodoItem> => {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : []
}

export default createComponent({
  setup() {
    let todoList = reactive([] as Array<TodoItem>)
    let completeList = reactive([] as Array<TodoItem>)

    const init = () => {
      todoList = getStorage('todoList')
      completeList = getStorage('completeList')
    }

    init()

    const addTodo = (title: string) => {
      const todo: TodoItem = {
        createTime: new Date(),
        title
      }
      todoList.unshift(todo)
      // 添加todo本地存储
      setStorage('todoList', todoList)
    }
    const confirm = (e: KeyboardEvent) => {
      if (e.keyCode === 13) {
        // 断言 否则ts无法直接获取value
        const target = e.currentTarget as HTMLInputElement
        addTodo(target.value)
        target.value = ''
      }
    }

    const finish = (item: TodoItem, index: number) => {
      todoList.splice(index, 1)
      completeList.unshift(item)
      setStorage('todoList', todoList)
      setStorage('completeList', completeList)
    }

    const deleteItem = (type: string, index: number) => {
      if (type === 'todo') {
        todoList.splice(index, 1)
        setStorage('todoList', todoList)
      } else {
        completeList.splice(index, 1)
        setStorage('completeList', completeList)
      }
    }

    return {
      confirm,
      addTodo,
      todoList,
      completeList,
      finish,
      deleteItem
    }
  }
})
</script>

<style lang="scss">
@import './Todolist.scss';
</style>
