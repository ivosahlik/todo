<template>
  <div class="todo-list">
    <todo-item />
    <todo-item />
  </div>
</template>

<script>
import TodoItem from "@/components/Todo/TodoItem";

export default {
  components: {
    TodoItem
  }
};
</script>

<style lang="scss" scoped>
</style>
