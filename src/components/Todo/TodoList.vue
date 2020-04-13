<template>
  <div class="todo-list">
    <todo-item
      v-for="todo in todos"
      :key="todo._id"
      :title="todo.title"
      :description="todo.description"
    />
  </div>
</template>

<script>
import TodoItem from "@/components/Todo/TodoItem";

export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  components: {
    TodoItem
  }
};
</script>

<style lang="scss" scoped>
</style>
