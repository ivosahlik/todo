<template>
  <div class="todo-list">
    <todo-item :title="'Title 1'" :description="'Description 1'" />
    <todo-item :title="'Title 1'" :description="'Description 1'" />
    <todo-item :title="todoTitle" :description="todoDescription" />
  </div>
</template>

<script>
import TodoItem from "@/components/Todo/TodoItem";

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todoTitle: "aaaaaaaaa",
      todoDescription: "bbbbbbbbbbbbb"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
