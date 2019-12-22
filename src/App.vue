<template>
  <div id="app">
    <!-- <Demo msg="Vue Function Api with TypeScript" /> -->
    <Todolist />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Todolist from './components/Todolist/Todolist.vue'
import Demo from './components/Demo.vue'

@Component({
  components: {
    Demo,
    Todolist
  }
})
export default class App extends Vue {}
</script>

<style>
body,
html,
ul {
  padding: 0;
  margin: 0;
}
html {
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
}
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* background-color: antiquewhite; */
  /* background-color: rgba(0, 0, 0, 0.6); */
  /* height: 100vh; */
  /* margin-top: 60px; */
}
</style>
