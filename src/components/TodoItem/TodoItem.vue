<template>
  <div class="todo-item"></div>
</template>

<script lang="ts">
import {
  ref,
  createComponent,
  onMounted,
  watch,
  computed
} from '@vue/composition-api'
interface Props {
  msg: string
}
export default createComponent<Props>({
  name: 'TodoItem',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return {}
  }
})
</script>

<style scoped></style>
