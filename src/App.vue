<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <todo-list :todos="todos" />
      </div>
    </div>
  </div>
</template>

<script>
import playground from "./playground";
import TodoList from "@/components/Todo/TodoList";

export default {
  name: "App",
  components: { TodoList },
  data() {
    return {
      todos: [
        {
          _id: "1",
          title: "Title 1",
          description: "Description 1"
        },
        {
          _id: "2",
          title: "Title 2",
          description: "Description 2"
        },
        {
          _id: "3",
          title: "Title 3",
          description: "Description 3"
        }
      ]
    };
  },
  created() {
    playground();
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.todo {
  &-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  &-container {
    width: 400px;
    min-height: 400px;
    background-color: #ededed;
    border-radius: 5px;
  }
}
</style>
